// const request = require("supertest");
// const server = require("./server");
// const Users = require("../models/userModels");
// const db = require("../data/config");
// const { intersect } = require("../data/config");

// describe("server.js", () => {

//   //a hook that we can run before each individual test.
//   beforeEach(async () => {
//     await db(users).truncate();
//   });

//   describe('POST /api/auth/register',()=>{
//     it('add a new user to database'), async()=>{
//       const users = await db('users');
//       //checking arrays or strings size
//       expect(users).toHaveLength(0);
//       await Users.addUser({
//         username: 'student1',
//         password: 'password1',
//         phone_number:'1234567890'
//       })
//       const newUser = await db('users');
//       expect(newUsers).toHaveLength(1);
//     }

//   })

// });
