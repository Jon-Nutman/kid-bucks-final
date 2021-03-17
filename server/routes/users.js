import express from 'express'
import conn from '../db.js'

const router = express.Router()
router.get('/users', async (request, response) => {
  const users = await conn.raw(`SELECT * FROM users;`)
  response.json(users.rows)
})
router.get('/test-user', async (request, response) => {
  console.log(request.user)
  response.json(request.user)
})
export default router
