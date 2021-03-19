import express from 'express'
import knex from '../db.js'
const router = express.Router()

// parent_id: req.user
// child_id: childId
// ?status=
router.get('/goals/:childId', async (req, res) => {
  const childId = req.params.childId
  req.json({ message: 'example' })
})

router.delete('/goals/:goalId', async (req, res) => {
  const goalId = req.params.goalId
  req.json({ message: 'example' })
})

route.patch('/goals/:goalId', async (req, res) => {
  const goalId = req.params.goalId
  req.json({ message: 'example' })
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
