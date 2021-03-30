import sha512 from 'js-sha512'
import conn from './db.js'
function createSalt(len = 20) {
  const vals = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let str = ''
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
const tables = ['transactions', 'goals', 'prizes', 'prize_bins', 'users']
async function main() {
  for (let table of tables) {
    const hasTable = await conn.schema.hasTable(table)
    if (hasTable) {
      await conn.schema.dropTable(table)
    }
  }
  // https://stackoverflow.com/questions/7573590/can-a-foreign-key-be-null-and-or-duplicate
  // https://stackoverflow.com/questions/58068929/migration-in-knex-js-cannot-set-foreign-key-on-nullable-field
  await conn.schema.createTable(`users`, (table) => {
    table.increments('id')
    table.string('username', 45)
    table.string('password', 128)
    table.string('salt', 20)
    table.boolean('is_admin')
    table.integer('parent_id').unsigned().nullable()
    table.foreign('parent_id').references('users.id').onDelete('cascade')
  })
  await conn.schema.createTable(`goals`, (table) => {
    table.increments('id')
    table.string('title', 45)
    table.string('description', 250)
    table.timestamp('created_at').defaultTo(conn.fn.now())
    table.timestamp('deadline')
    table.integer('points').unsigned()
    table
      .enu('status', ['complete', 'not_started', 'active', 'reported'])
      .defaultTo('not_started')
    table.integer('parent_id').unsigned()
    table.foreign('parent_id').references('users.id').onDelete('cascade')
    table.integer('child_id').unsigned()
    table.foreign('child_id').references('users.id').onDelete('cascade')
  })

  await conn.schema.createTable(`prize_bins`, (table) => {
    table.increments('id')
    table.integer('balance').unsigned().defaultTo(0)
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id').onDelete('cascade')
    //table.integer("prizes_id").unsigned() <--- do we need this?
    // table.foreign("prizes_id").references("prizes.id").onDelete("cascade")
  })

  await conn.schema.createTable(`prizes`, (table) => {
    table.increments('id')
    table.integer('points')
    table.string('title', 128)
    table.string('description', 250)
    table.string('prize_thumbnail', 255)
    table.integer('prize_bin_id').unsigned()
    table
      .foreign('prize_bin_id')
      .references('prize_bins.id')
      .onDelete('cascade')
  })

  await conn.schema.createTable(`transactions`, (table) => {
    table.increments('id')
    table.integer('prize_id').unsigned()
    table.foreign('prize_id').references('prizes.id').onDelete('cascade')
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id').onDelete('cascade')
    table.integer('points').unsigned()
    table.integer('quantity').unsigned()
    table
      .enu('status', ['denied', 'approved', 'requested'])
      .defaultTo('requested')
  })

  const salt = createSalt(20)
  await conn('users').insert({
    id: 1,
    username: 'larry',
    password: sha512('test' + salt),
    salt: salt,
    is_admin: true,
  })
  await conn('users').insert({
    id: 2,
    username: 'timmy',
    password: sha512('test' + salt),
    salt: salt,
    is_admin: false,
    parent_id: 1,
  })
  await conn('users').insert({
    id: 3,
    username: 'susie',
    password: sha512('test' + salt),
    salt: salt,
    is_admin: false,
    parent_id: 1,
  })
  function getDateAWeekFromNow() {
    const now = new Date()
    now.setDate(now.getDate() + 7)
    const dd = now.getDate()
    const mm = now.getMonth() + 1
    const y = now.getFullYear()
    const newDate = mm + '-' + dd + '-' + y
    return newDate
  }
  const deadline = getDateAWeekFromNow()
  await conn('goals').insert({
    id: 1,
    title: 'Walk the Dog',
    description: 'When you get back from school take the dog around the block',
    points: 10,
    status: 'not_started',
    parent_id: 1,
    child_id: 2,
    deadline: deadline,
  })
  await conn('goals').insert({
    id: 2,
    title: 'Empty the dishwasher',
    description:
      'Put the dirty dishes in the dishwasher after you empty the clean ones.',
    points: 10,
    status: 'not_started',
    parent_id: 1,
    child_id: 2,
    deadline: deadline,
  })
  await conn('goals').insert({
    id: 3,
    title: 'Work on science fair project',
    description:
      'For at least 1 hour work on your science fair project and fully document your progress',
    points: 15,
    status: 'not_started',
    parent_id: 1,
    child_id: 2,
    deadline: deadline,
  })

  await conn('prize_bins').insert({
    user_id: 2,
    balance: 100,
  })
  await conn('prize_bins').insert({
    user_id: 3,
    balance: 100,
  })
  await conn('prizes').insert({
    id: 1,
    points: 30,
    title: 'Movie Night',
    description: 'You get to pick a movie for the whole family to watch',
    prize_thumbnail:
      'https://images.freecreatives.com/wp-content/uploads/2017/10/flat-clapperboard-icon_1063-38.jpg',
    prize_bin_id: 1,
  })
  await conn('prizes').insert({
    id: 2,
    points: 20,
    title: 'Ice Cream Sundae',
    description: 'Make your own Ice Cream Sundae, any toppings you want.',
    prize_thumbnail: 'https://assets.rbl.ms/21919567/origin.jpg',
    prize_bin_id: 1,
  })
  await conn('prizes').insert({
    id: 3,
    points: 15,
    title: 'Screen Time',
    description: '30 minutes of screen time on any of your devices',
    prize_thumbnail:
      'https://static01.nyt.com/images/2019/04/04/smarter-living/04sl-screentime-rgbcolor/04sl-screentime-rgbcolor-superJumbo.jpg',
    prize_bin_id: 1,
  })
  // await conn('transactions').insert({
  //   prize_id: 1,
  //   user_id: 2,
  //   points: 5,
  //   quantity: 2,
  // })
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
