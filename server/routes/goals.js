import express from 'express'
import knex from '../db.js'
const router = express.Router()

// parent_id: req.user
// child_id: childId
// ?status=
router.get('/goals/:childId', async (req, res) => {
  const childId = req.params.childId
  res.json({ message: 'here are your goals' })
})

router.delete('/goals/:goalId', async (req, res) => {
  const goalId = req.params.goalId
  res.json({ message: 'example' })
})

router.patch('/goals/:goalId', async (req, res) => {
  const goalId = req.params.goalId
  res.json({ message: 'your goal has been updated' })
})

// POST REQ

router.post('/goals', async (req, res) => {
  console.log(req.body)
  const {
    title,
    description,
    points,
    deadline,
    status,
    parent_id,
    child_id,
  } = req.body
  await knex.raw(
    `
    INSERT INTO goals (title, description, deadline, points, status, parent_id, child_id)
    VALUES (?,?,?,?,?,?,?);
    `,
    [title, description, deadline, points, status, parent_id, child_id]
  )
  res.json({ message: 'Your minions have been informed about their tasks' })
})
export default router
