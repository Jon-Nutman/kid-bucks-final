import express from 'express'
import knex from '../db.js'
const router = express.Router()

// POST REQ

router.post("/goals", async (req, res) => {
  console.log(req.body)
    const { title, description, points, deadline , status, parent_id, child_id} = req.body
   await knex.raw(
      `
  INSERT INTO goals (title, description, deadline, points, status, parent_id, child_id)
  VALUES (?,?,?,?,?,?,?);
  `,
      [title, description, deadline, points, status, parent_id, child_id]
    )
    res.json({ message: "Your minions have been informed about their tasks"})
  })
  export default router
