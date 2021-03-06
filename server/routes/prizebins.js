import express from 'express'
import db from '../db.js'
import knex from '../db.js'
const router = express.Router()

// prizes that belong to prize bin
router.get('/prize-bins/:childId', async (req, res) => {
  const childId = req.params.childId
  console.log(childId)
  const prize_bins = await knex.raw(
    `
      SELECT p.title, p.description, p.points, p.prize_thumbnail, u.is_admin, u.id as child_id, pb.id as prize_bin_id from prize_bins pb	
      INNER JOIN users u ON pb.user_id= u.id
      INNER JOIN prizes p ON pb.id= p.prize_bin_id
      WHERE u.id = ?
      `,
    [childId]
  )
  res.json(prize_bins.rows)
})

router.get('/balance/:childId', async (req, res) => {
  const childId = req.params.childId
  console.log(childId)
  const prize_bins = await knex.raw(
    `SELECT balance from prize_bins 
    WHERE prize_bins.user_id = 2`
    // [childId]
  )
  const deductionData = await knex.raw(
    `
    SELECT points, quantity, status FROM transactions WHERE user_id = ?
    AND status = 'requested'
    `,
    [childId]
  )
  const deduction = deductionData.rows.reduce(
    (acc, curr) => acc + curr.quantity * curr.points,
    0
  )
  res.json({
    balance: prize_bins.rows[0].balance,
    deduction,
  })
})

//post to prize-bin
// not sure about the values.  Also- does this happen at the creation of a child?
router.post('/prize_bins/:prizeBinId', async (req, res) => {
  const { balance, child_id } = req.body
  console.log(req.body)
  await knex.raw(
    `
      INSERT INTO balance (balance, child_id)
      VALUES (?,?);
      `,
    [balance, req.prize_bins.id]
  )
  res.json({ message: 'Your points have been posted' })
})

//patch request to prize-bins to adjust the balance.
router.patch('/prize_bins/:prizeBinId', async (req, res) => {
  const updateBalance = req.body
  const prizeBinId = req.params.prizeBinId
  await db.table('prize_bins').where({ id: prizeBinId }).update(updateBalance)
  res.json({ message: 'Your points have been updated' })
})

export default router
