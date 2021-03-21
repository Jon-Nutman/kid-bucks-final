import express from "express";
import db from "../db.js";
import knex from "../db.js";
const router = express.Router();

// prizes that belong to prize bin
router.get("/prize-bins/:childId", async (req, res) => {
  const childId = req.params.childId;
  console.log(childId);
  const prize_bins = await knex.raw(
    `
    SELECT p.title, p.description, p.status, p.points, p.prize_thumbnail, u.is_admin, u.id as child_id, pb.id as prize_bin_id from prize_bins pb	
    INNER JOIN users u ON pb.user_id= u.id
    INNER JOIN prizes p ON pb.id= p.prize_bin_id
    WHERE u.id = ?
    `,
    [childId]
  );
  res.json(prize_bins.rows);
});

// this delete is not deleting the prizes from the database.  SQL works in beekeeper.
router.delete("/prizes/:prizeId", async (req, res) => {
  const prizeId = req.params.prizeId;
  await knex.raw(
  `
  DELETE from prizes p 
  WHERE p.id=?
  `,[prizeId]
  )
  res.json({ message: `your prize number ${prizeId} was deleted` });
});

router.patch("/prizes/:prizeId", async (req, res) => {

  const prizePropertiesToUpdate = req.body;
  const prizeId = req.params.prizeId;
  const updatePrize = 
  await db.table("prizes").where({ id: prizeId }).update(prizePropertiesToUpdate);
  res.json({ message: "your prize has been updated" });
});

// POST REQ

router.post("/prizes", async (req, res) => {
  console.log(req.body);
  const { title, description, points, prize_thumbnail } = req.body;
  await knex.raw(
  `
  INSERT INTO prizes (title, description, points, prize_thumbnail)
  VALUES (?,?,?,?);
  `,
    [title, description, points, prize_thumbnail]
  );
  res.json({ message: "Your minions have been informed about their rewards" });
});

// needs to be discussed with thomas
router.get("/prizes/", async (req, res) => {
  // console.log(req.user.id)
  const prizes = await knex.raw(
    `
    SELECT * FROM prizes
    WHERE id = ?

    `,
    [childId]
  );
  res.json(prizes.rows);
});

// prize requested/redeemed placeholder
router.get("/prizes/requested", async (req, res) => {


});

export default router;
