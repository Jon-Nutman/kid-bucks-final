import express from 'express'
import conn from '../db.js'

const router = express.Router()

router.get('/users', async (request, response) => {
  const users = await conn.raw(`SELECT * FROM users;`)
  response.json(users.rows)
})

router.get('/users-children', async (request, response) => {
  const parentId = request.user.id
  const usersChildren = await conn.raw(`SELECT * FROM users
  WHERE is_admin = false AND parent_id = ?;`,
  [parentId])
  response.json(usersChildren.rows)
})

router.get('/test-user', async (request, response) => {
  console.log(request.user)
  response.json(request.user)
})

router.delete('/users/child/:childId', async (request, response) => {
  const childId = request.params.childId
  await conn.raw(
    `
    DELETE FROM users 
    WHERE id=?;
    `,
    [childId]
  )
  response.json({ message: 'child deleted' })
})

// router.patch('/users/child/:childId', async (request, response) => {
//   const childlId = req.params.childId
//   response.json({ message: 'child updated' })
// })

export default router
