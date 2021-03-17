import express from 'express'
import conn from '../db.js'
const router = express.Router()

// POST REQ

router.post("/goals", async (req, res) => {
    const { id, title, description, created_at, deadline, points, status, parent_id, child_id, order } = req.body
    await knex.raw(
      `
  INSERT INTO goals (id, title, description, created_at, deadline, points, status, parent_id, child_id, order)
  VALUES (?,?,?,?,?,?,?,?,?,?);
  `,
      [id, title, description, created_at, deadline, points, status, parent_id, child_id, order]
    )
    res.json({ message: "Your minions have been informed about their tasks"})
  })
  export default router