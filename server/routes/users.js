import express from 'express'
import knex from '../db.js'

const router = express.Router()

router.get('/users', async (request, response) => {
  const users = await knex.raw(`SELECT * FROM users;`)
  response.json(users.rows)
})
router.get('/test-user', async (request, response) => {
  console.log(request.user)
  response.json(request.user)
})

router.delete("/users/child/:id", async (request, response) => {
  const childId = request.params.id
  await knex.raw(
    `DELETE FROM users
     WHERE id=? ;`,
    [childId]
  )
  response.json({ message: "child deleted" })
})

// router.patch('/users/child/:childId', async (request, response) => {
//   const childlId = req.params.childId
//   response.json({ message: 'child updated' })
// })


export default router
