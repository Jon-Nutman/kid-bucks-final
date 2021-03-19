import express from "express"
import knex from "../db.js"
const router = express.Router()

// POST REQ

router.post("/prizes", async (req, res) => {
  console.log(req.body)
  const { title, description, points, prize_thumbnail, status } = req.body
  await knex.raw(
    `
  INSERT INTO prizes (title, description, points, prize_thumbnail, status)
  VALUES (?,?,?,?);
  `,
    [title, description, points, prize_thumbnail, status]
  )
  res.json({ message: "Your minions have been informed about their rewards" })
})

// GET REQ's

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

router.get("/prizes-redeemed", async (req, res) => {

  console.log(req.body)

  const prizes = await knex.raw(

    `
    SELECT * FROM prizes
    WHERE prizes.status='redeemed'
    `
  )
  res.json({ message: "Its time to pay the minions" })
})

// DELETE REQ's





export default router