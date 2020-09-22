const request = require("supertest");
const server = require("./server");
const Users = require("../models/userModels");
const db = require("../data/config");
const { intersect } = require("../data/config");




describe('server.js', () => {
   //a hook that we can run before each individual test.
  beforeEach(async () => {
    await db('users').truncate(); 
  })
  
  //  REGISTER

  describe('POST /api/auth/register', () => {
    it('add a user to the database', async () => {
      const users = await db('users');
      expect(users).toHaveLength(0);
      await Users.addUser({
        username: 'student1',
        password: 'password1',
        phone_number: '1234567891'
      })
      const newUsers = await db('users');
      expect(newUsers).toHaveLength(1);
    })
    it('check added user', async () => {
      const users = await db('users');
      expect(users).toHaveLength(0);
      await Users.addUser({
        username: 'student2',
        password: 'password2',
        phone_number: '1234567892'
      })
    })
    it('Status Code 201', () => {
      return request(server).post('/api/auth/register')
        .send({
          username: 'student3',
          password: 'password3',
          phone_number: '1234567893'
        })
        .expect(201);
    })
  })

  //LOGIN
  
  describe('POST /api/auth/login', () => {
    it('return JSON', async () => {
      return request(server).post('/api/auth/login')
        .then(res => {
          expect(res.type).toMatch(/json/i)
        })
    })
    it('Status Code 200', async () => {
      res = await request(server)
        .post('/api/auth/register')
        .send({
          username: 'student1',
          password: 'password1',
          phone_number: '1234567891'
        });
      expect(res.status).toEqual(201);
      res = await request(server)
        .post('/api/auth/login')
        .send({
          username: 'student1',
          password: 'password1'
        });
      expect(res.status).toEqual(200);
    })
  })
  
  //GET PLANTS
  
  // describe('GET /api/plants', () => {
  //   it('Receive a list of plants', () => {
  //     return request(server).get('/api/plants')
  //       .then(res => {
  //         expect(res.status).toBe(200);
  //       })
  //   })
  //   it('return JSON', async () => {
  //     return request(server).get('/api/plants')
  //       .then(res => {
  //         expect(res.type).toMatch(/json/i)
  //       })
  //   })
  //   it('list of plants on successful login with token', async () => {
  //     res = await request(server)
  //       .post('/api/auth/register')
  //       .send({
  //         username: 'student1',
  //         password: 'password1',
  //         phone_number: '1234567891'
  //       });
  //     expect(res.status).toEqual(201);
  //     res = await request(server)
  //       .post('/api/auth/login')
  //       .send({
  //         username: 'student1',
  //         password: 'password1',
  //         phone_number: '1234567891'
  //       });
  //     expect(res.status).toEqual(200);
  //     const token = res.body.token;
  //     expect(token.length).toBeGreaterThan(20);
  //     res = await request(server)
  //       .get('/api/plants')
  //       .set({ authorization: token, Accept: 'application/json' });
  //     expect(res.body).toBeInstanceOf(Object);
  //     expect(res.status).toBe(200);
  //   })
  // })
})


