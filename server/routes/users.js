import express from 'express'
import conn from '../db.js'

const router = express.Router()
router.get('/users', async (request, response) => {
  const users = await conn.raw(`SELECT * FROM users;`)
  response.json([{ id: 1, name: 'john' }])
})
export default router
