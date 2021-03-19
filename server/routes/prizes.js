import express from 'express'
import knex from '../db.js'
const router = express.Router()

// prizes that belong to prize bin
router.get('/prize-bins/:childId', async (req, res) => {
  const childId = req.params.childId
  res.json({ message: 'example' })
})

router.delete('/prizes/:prizeId', async (req, res) => {
  const prizId = req.params.prizeId
  res.json({ message: 'example' })
})

router.patch('/prizes/:prizeId', async (req, res) => {
  const prizeId = req.params.prizeId
  res.json({ message: 'your prize has been updated' })
})

// POST REQ

router.post('/prizes', async (req, res) => {
  console.log(req.body)
  const { title, description, points, prize_thumbnail } = req.body
  await knex.raw(
    `
  INSERT INTO prizes (title, description, points, prize_thumbnail)
  VALUES (?,?,?,?);
  `,
    [title, description, points, prize_thumbnail]
  )
  res.json({ message: 'Your minions have been informed about their rewards' })
})

router.get('/prizes', async (req, res) => {
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

// prize requested placeholder
router.get('/prizes/requested', async (req, res) => {})

export default router
