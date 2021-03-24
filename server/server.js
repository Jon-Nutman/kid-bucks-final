import express from 'express'
import './config.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import goalsRoutes from './routes/goals.js'
import prizesRoutes from './routes/prizes.js'
import transactionRoutes from './routes/transaction.js'
import attachUser from './middleware/user.js'
import logger from './middleware/logger.js'
const app = express()
const PORT = 3001
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(attachUser)
app.use(logger)

app.use('/api', userRoutes)
app.use('/api', authRoutes)
app.use('/api', goalsRoutes)
app.use('/api', prizesRoutes)
app.use('/api', transactionRoutes)

// // body, params, query
// app.get('/api/users', (request, response) => {
//   console.log(request.user)
//   response.json(request.user)
// })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
