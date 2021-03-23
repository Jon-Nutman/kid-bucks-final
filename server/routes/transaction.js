import express from 'express'
import conn from '../db.js'

const router = express.Router()

router.get('/transactions', async (request, response) => {
  response.json({ message: 'here' })
})

router.patch('/transactions/:transactionId', async (request, response) => {
  response.json({ message: 'here' })
})

export default router
