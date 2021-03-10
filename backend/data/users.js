import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@aa.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Rahim Iqbal',
    email: 'rahim@aa.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'AAA CCC',
    email: 'aa@aa.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users
