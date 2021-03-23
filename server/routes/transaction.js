import express from "express";
import conn from "../db.js";

const router = express.Router();

router.get("/transactions/:childId", async (request, response) => {
  const transactionSQL = `SELECT * FROM transactions
INNER JOIN prizes
ON prizes.id = transactions.prize_id
WHERE user_id = ? AND transactions.status = 'requested';`;
  const transactions = await conn.raw(transactionSQL, [request.params.childId]);
  response.json(transactions.rows);
});

router.patch("/transactions/:transactionId", async (request, response) => {
  response.json({ message: "here" });
});

export default router;
