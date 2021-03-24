import express from 'express'
import db from '../db.js'
import knex from '../db.js'
const router = express.Router()


// this delete is not deleting the prizes from the database.  SQL works in beekeeper.
router.delete('/prizes/:prizeId', async (req, res) => {
  const prizeId = req.params.prizeId
  await knex.raw(
    `
  DELETE from prizes p 
  WHERE p.id=?
  `,
    [prizeId]
  )
  res.json({ message: `your prize number ${prizeId} was deleted` })
})

router.patch('/prizes/:prizeId', async (req, res) => {
  const prizePropertiesToUpdate = req.body
  const prizeId = req.params.prizeId
  const updatePrize = await db
    .table('prizes')
    .where({ id: prizeId })
    .update(prizePropertiesToUpdate)
  res.json({ message: 'your prize has been updated' })
})

// POST REQ

router.post('/prizes', async (req, res) => {
  const { title, description, points, prize_thumbnail, child_id } = req.body
  const prizeBins = await knex.raw(
    'SELECT * FROM prize_bins WHERE user_id = ?',
    [child_id]
  )
  const currentBin = prizeBins.rows[0]
  try {
    await knex.raw(
      `
  INSERT INTO prizes (title, description, points, prize_thumbnail, prize_bin_id)
  VALUES (?,?,?,?,?);
  `,
      [title, description, points, prize_thumbnail, currentBin.id]
    )
  } catch (err) {
    console.log('an error occured', err)
  }

  res.json({ message: 'Your minions have been informed about their rewards' })
})

// needs to be discussed with thomas
router.get('/prizes/:childId', async (req, res) => {
  // console.log(req.user.id)
  // find prize bin
  const prizeBin = await knex.raw(
    `
    SELECT * FROM prize_bins
    WHERE user_id = ?
    `,
    [req.params.childId]
  )
  const prizeBinId = prizeBin.rows[0].id
  const prizes = await knex.raw(
    `
    SELECT * FROM prizes
    WHERE prize_bin_id = ?
    `,
    [prizeBinId]
  )
  res.json(prizes.rows)
})


export default router
