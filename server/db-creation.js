import sha512 from "js-sha512"
import conn from "./db.js"
function createSalt(len = 20) {
  const vals = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let str = ""
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * vals.length)
    str += vals.charAt(randomIndex)
  }
  return str
}
// const sha512 = require('js-sha512')
// const conn = require('./db')
// const { createSalt } = require('./utils/auth')
// NOTE this order does not matter if cascade deletion is set otherwise this is the order it'd need to be
// due to foreign key reference issue during deletion
const tables = ["goals", "prizes", "prize_bins","users"]
async function main() {
  for (let table of tables) {
    const hasTable = await conn.schema.hasTable(table)
    if (hasTable) {
      await conn.schema.dropTable(table)
    }
  }
  await conn.schema.createTable(`users`, (table) => {
    table.increments("id")
    table.string("username", 45)
    table.string("password", 128)
    table.string("salt", 20)
    table.boolean("is_admin")
  })
  await conn.schema.createTable(`goals`, (table) => {
    table.increments("id")
    table.string("title", 45)
    table.string("description", 250)
    table.integer("points").unsigned()
    table.enu("status", ["complete", "not_started", "active"])
    table.integer("parent_id").unsigned()
    table.foreign("parent_id").references("users.id").onDelete("cascade")
    table.integer("child_id").unsigned()
    table.foreign("child_id").references("users.id").onDelete("cascade")
    table.integer("order").unsigned()
  })
  await conn.schema.createTable(`prize_bins`, (table) => {
    table.increments("id")
    table.integer("user_id").unsigned()
    table.foreign("user_id").references("users.id").onDelete("cascade")
    //table.integer("prizes_id").unsigned() <--- do we need this?
    // table.foreign("prizes_id").references("prizes.id").onDelete("cascade")
  })
  await conn.schema.createTable(`prizes`, (table) => {
    table.increments("id")
    table.string("points", 20)
    table.string("title", 128)
    table.string("description", 250)
    table.string("prize_thumbnail", 255)
    table.integer("prize_bin_id").unsigned()
    table
      .foreign("prize_bin_id")
      .references("prize_bins.id")
      .onDelete("cascade")
  })
  const salt = createSalt(20)
  await conn("users").insert({
    id:1,
    username: "parent",
    password: sha512("test" + salt),
    salt: salt,
    is_admin: true,
  })
  await conn("users").insert({
    id:2,
    username: "child",
    password: sha512("test" + salt),
    salt: salt,
    is_admin: false,
  })
  await conn("goals").insert({
    id: 1,
    title: "wash and dress",
    description: "Wash your face, brush your teeth, dress your best.",
    points: 5,
    status: "not_started",
    parent_id: 1,
    child_id: 2,
    order: 0,
  })
  await conn("prizes").insert({
    id: 1,
    points: 5,
    title: "robux",
    description: "1000 robux",
    prize_thumbnail: "https://m.media-amazon.com/images/I/71QMkXmLVCL._SY606_.jpg",
    prize_bin_id: 1,
  })
  await conn("prize_bins").insert({
    id: 1,
    user_id: 1,
    user_id: 2,
  })
  // await conn.raw('DELETE FROM users WHERE id = 1')
  process.exit()
}
main()
// respective sql below...
const userSQL = `
CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    username varchar(45) not null,
    password varchar(128) not null,
    salt varchar(20) not null
);
`