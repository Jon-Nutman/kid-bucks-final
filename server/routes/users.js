import express from "express"
import conn from "../db.js"

const router = express.Router()

router.get("/users", async (request, response) => {
  const users = await conn.raw(`SELECT * FROM users;`)
  response.json(users.rows)
})
router.get("/test-user", async (request, response) => {
  console.log(request.user)
  response.json(request.user)
})

router.delete("/users/child/:childId", async (request, response) => {
  const childId = req.params.childId
  await conn.raw(
    `
    DELETE FROM users 
    WHERE id=?;
    `,
    [childId]
  )
  response.json({ message: "child deleted" })
})

router.get("/users/child/:id" ,async (request, response)  => {
  const childId = req.params.id
  await conn.raw(
    `SELECT * FROM users
    WHERE parent_id = ?;`
    ,
    [id]
  )
  response.json({ message: "Here are your children" })

})
router.patch('/users/child/:childId', async (request, response) => {
  const childlId = req.params.childId
  await conn.raw(
    `SELECT * FROM users
    WHERE parent_id = ?;`
    ,
    [id]
  )
  response.json({ message: 'child updated' })
})

export default router
