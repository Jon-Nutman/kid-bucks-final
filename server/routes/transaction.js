import express from 'express'
import conn from '../db.js'
import db from '../db.js'

const router = express.Router()

router.get('/transactions/:childId', async (request, response) => {
  const transactionSQL = `
  SELECT
  t.id as id, prize_id, status, user_id,
  t.quantity as quantity,
  title, t.points, description, prize_thumbnail
  FROM transactions t
  INNER JOIN prizes
  ON prizes.id = prize_id
  WHERE user_id = ? AND status = 'requested';`
  const transactions = await conn.raw(transactionSQL, [request.params.childId])
  response.json(transactions.rows)
})

router.patch('/transactions/:transactionId', async (request, response) => {
  const transactionId = request.params.transactionId
  const updateTransaction = request.body
  const currentTransaction = await db
    .table('transactions')
    .where({ id: transactionId })
    .first()
  if (currentTransaction.status === 'approved') {
    response.json({ message: 'transaction already approved' })
  }
  const updateTransactionTable = await db
    .table('transactions')
    .where({ id: transactionId })
    .update(updateTransaction)
  if (updateTransactionTable.status === 'approved') {
    const qty = currentTransaction.quantity
    const currentUserId = currentTransaction.user_id
    const pointsToDeduct = currentTransaction.points * qty
    const prizeBin = await db
      .table('prize_bins')
      .where({ user_id: currentUserId })
      .first()
    const prizeBinFound = await db
      .table('prize_bins')
      .where({ id: prizeBin.id })
      .first()
    const currentBalance = prizeBinFound.balance
    const newBalance = currentBalance - pointsToDeduct
    if (newBalance >= 0) {
      await db
        .table('prize_bins')
        .where({ id: prizeBin.id })
        .update({ balance: newBalance })
    }
    response.json({ message: 'your transaction has been updated' })
  } else {
    response.json({ message: 'your transaction has been denied' })
  }
})

router.post('/transactions', async (req, res) => {
  const transactions = req.body
  for (let transaction of transactions) {
    const { id, points, quantity } = transaction
    await conn.raw(
      `
    INSERT INTO transactions (user_id, prize_id, points, quantity)
    VALUES (?,?,?,?);
    `,
      [req.user.id, id, points, quantity]
    )
  }
  res.json({ message: 'Your minions want you to spend money' })
})

export default router
