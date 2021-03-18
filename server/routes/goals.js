import express from 'express'
import conn from '../db.js'

const router = express.Router()
// { title: 'a', points: '', description: 'hello', deadline: 'March 4' }
// y + "-" + mm + "-" + dd;
router.post('/goals', async (request, response) => {
  const { title, points, description, deadline } = request.body
  const userId = request.user.id
  // const deadline = '2021-04-05'
  const sql = `
  INSERT INTO goals
  (title,description,points,status,deadline,parent_id,child_id)
  VALUES (?, ?, ?, ?, ?, ?, ?);
  `
  const bindings = [title, description, points, 'active', deadline, userId, 2]
  await conn.raw(sql, bindings)
  response.json({message: 'goal created'})
})
export default router
