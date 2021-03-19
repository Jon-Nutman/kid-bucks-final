// const express = require('express')
import express from 'express'
import sha512 from 'js-sha512'
import jwt from 'jsonwebtoken'
const router = express.Router()
import conn from '../db.js'
import { createSalt } from '../utils/auth.js'

router.post('/registration/child', async (req, res) => {
  const { username, password } = req.body
  const userId = req.user.id
  console.log(req.body)
  const salt = createSalt(20)
  const hashedPassword = sha512(password + salt)
  const checkIfUserExistsSql = `SELECT * FROM users WHERE username = ?;`
  const hasAUser = await conn.raw(checkIfUserExistsSql, [username])
  const userExists = hasAUser.rows.length
  if (userExists) {
    res.status(400).json({ message: 'username already exists' })
  } else {
    const addUserSql = `
        INSERT INTO users (username, password, salt, parent_id, is_admin)
        VALUES (?, ?, ?, ?, ?);
    `
    const insertedUser = await conn.raw(addUserSql, [
      username,
      hashedPassword,
      salt,
      userId,
      false,
    ])
    res.status(201).json({ message: 'user successfully created' })
  }
})

router.post('/registration', async (req, res) => {
  const { username, password } = req.body
  console.log(req.body)
  const salt = createSalt(20)
  const hashedPassword = sha512(password + salt)
  const checkIfUserExistsSql = `SELECT * FROM users WHERE username = ?;`
  const hasAUser = await conn.raw(checkIfUserExistsSql, [username])
  const userExists = hasAUser.rows.length
  if (userExists) {
    res.status(400).json({ message: 'username already exists' })
  } else {
    const addUserSql = `
        INSERT INTO users (username, password, salt, is_admin)
        VALUES (?, ?, ?, ?);
    `
    const insertedUser = await conn.raw(addUserSql, [
      username,
      hashedPassword,
      salt,
      true,
    ])
    res.status(201).json({ message: 'user successfully created' })
  }
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  const checkIfUserExistsSql = `SELECT * FROM users WHERE username = ?;`
  const hasAUser = await conn.raw(checkIfUserExistsSql, [username])
  const userExists = hasAUser.rows.length
  if (!userExists) {
    res.status(400).json({ message: 'invalid username or password' })
  } else {
    const user = hasAUser.rows[0]
    const hashedPassword = sha512(password + user.salt)
    if (hashedPassword === user.password) {
      // generate a token based on server secret for client to use to authenticate
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.SECRET
      )
      res.status(200).json({ token: token })
    } else {
      res.status(400).json({ message: 'invalid username or password' })
    }
  }
})

export default router
