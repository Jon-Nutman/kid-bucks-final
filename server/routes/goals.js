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
  await db.table('goals').where({ id: goalId }).update(updateGoals)
  res.json({ message: 'your goal has been updated' })
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
