import express from "express"
import knex from "../db.js"
const router = express.Router()

// POST REQ

router.post("/prizes", async (req, res) => {
  console.log(req.body)
  const { title, description, points } = req.body
  await knex.raw(
    `
  INSERT INTO prizes (title, description, points)
  VALUES (?,?,?);
  `,
    [title, description, points]
  )
  res.json({ message: "Your minions have been informed about their rewards" })
})
export default router
