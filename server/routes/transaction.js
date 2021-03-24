import express from "express";
import conn from "../db.js";
import db from '../db.js'

const router = express.Router();

router.get("/transactions/:childId", async (request, response) => {
  const transactionSQL = `
  SELECT * FROM transactions
  INNER JOIN prizes
  ON prizes.id = transactions.prize_id
  WHERE user_id = ? AND transactions.status = 'requested';`;
  const transactions = await conn.raw(transactionSQL, [request.params.childId]);
  response.json(transactions.rows);
});

router.patch("/transactions/:transactionId", async (request, response) => {
    const updateTransaction = request.body
    const updateTransactionTable = await db
    .table('transactions')
    .where({ id: request.params.transactionId })
    .update(updateTransaction)
  response.json({ message: 'your transaction has been updated' })
})


router.post('/transactions/:childId', async (req, res) => {
  const { prize_id, points, quantity, status } = req.body
  console.log(req.body)
  await conn.raw(
    `
    INSERT INTO transactions (user_id, prize_id, points, quantity, status)
    VALUES (?,?,?,?,?);
    `,
    [req.params.childId, prize_id, points, quantity, status]
  )
  res.json({ message: 'Your minions want you to spend money' })
})

export default router;
