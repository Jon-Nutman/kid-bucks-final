import express from 'express'
import './config.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import attachUser from './middleware/user.js'
const app = express()
const PORT = 3001
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(attachUser)

app.use('/api', userRoutes)
app.use('/api', authRoutes)

// // body, params, query
// app.get('/api/users', (request, response) => {
//   console.log(request.user)
//   response.json(request.user)
// })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
