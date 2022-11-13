import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Emmanuel Famutimi',
    email: 'olamide.famutimi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Donnie Yen',
    email: 'donnieyen@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tech Bro',
    email: 'techbro@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
