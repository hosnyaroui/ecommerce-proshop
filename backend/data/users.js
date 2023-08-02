import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hosny Aroui',
    email: 'hosny@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Scarlett Johanson',
    email: 'Scarlett@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;