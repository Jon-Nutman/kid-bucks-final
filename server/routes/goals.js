import express from 'express'
import db from '../db.js'
import knex from '../db.js'
const router = express.Router()

// parent_id: req.user
// child_id: childId
// ?status=
router.get('/goals/:childId', async (req, res) => {
  const childId = req.params.childId
  console.log(childId)
  const goals = await knex.raw(
    `
    SELECT * FROM goals
    WHERE child_id=?
    ORDER BY id
    `,
    [childId]
  )
  res.json(goals.rows)
})

router.delete('/goals/:goalId', async (req, res) => {
  const goalId = req.params.goalId
  await db.raw(
    `
    DELETE FROM goals
    WHERE id=?
    `,
    [goalId]
  )
  res.json({ message: 'goal deleted!' })
})

router.patch('/goals/:goalId', async (req, res) => {
  const updateGoals = req.body
  const goalId = req.params.goalId
  const goalResult = await db
    .table('goals')
    .where({ id: goalId })
    .update(updateGoals)
  const goal = await db.table('goals').where({ id: goalResult }).first()
  if (goal.status === 'complete') {
    res.json({ message: 'goal already completed' })
  }
  if (updateGoals.status === 'complete') {
    const childId = goal.child_id
    const pointsToAdd = goal.points
    const prizeBin = await db
      .table('prize_bins')
      .where({ user_id: childId })
      .first()
    const prizeBinFound = await db
      .table('prize_bins')
      .where({ id: prizeBin.id })
      .first()
    const currentBalance = prizeBinFound.balance
    const newBalance = currentBalance + pointsToAdd
    await db
      .table('prize_bins')
      .where({ id: prizeBin.id })
      .update({ balance: newBalance })
    // find the prize bin of the user
    // update the prize bin with the new balance
    res.json({ message: 'your goal has been updated' })
  }

  res.json({ message: 'goal updated' })
})

// POST REQ

router.post('/goals', async (req, res) => {
  const { title, description, points, status, child_id } = req.body
  console.log(req.body)
  await knex.raw(
    `
    INSERT INTO goals (title, description, points, status, parent_id, child_id)
    VALUES (?,?,?,?,?,?);
    `,
    [title, description, points, status, req.user.id, child_id]
  )
  res.json({ message: 'Your minions have been informed about their tasks' })
})
export default router
