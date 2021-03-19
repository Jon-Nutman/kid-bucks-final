import express from "express"
import knex from "../db.js"
const router = express.Router()

// POST REQ

router.post("/prizes", async (req, res) => {
  console.log(req.body)
  const { title, description, points, prize_thumbnail } = req.body
  await knex.raw(
    `
  INSERT INTO prizes (title, description, points, prize_thumbnail)
  VALUES (?,?,?,?);
  `,
    [title, description, points, prize_thumbnail]
  )
  res.json({ message: "Your minions have been informed about their rewards" })
})

router.get("/prizes", async (req,res) => {
  // console.log(req.user.id)
  const prizes = await knex.raw(
    
    `
    SELECT * FROM prizes
    WHERE id = ?

    `,
    [1]
  )
res.json(prizes.rows)
})

export default router