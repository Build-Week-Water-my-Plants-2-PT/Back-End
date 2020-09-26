const request = require("supertest");
const server = require("./server");
const Users = require("../models/userModels");
const db = require("../data/config");
require("dotenv").config();
const supertest = require("supertest");
const restrict = require("../middleware/restricted")

   //a hook that we can run before each individual test.
beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy();
});
 
//since we’re dealing with multiple tests, we can group them together in something  called a ‘describe’ block which groups together tests into categories. 

  describe("integration tests for endpoints", () => {
    //when we describe something, ‘it’ does something. 

    // TEST SERVER
    it("GET /", async () => { 
      const res = await supertest(server).get("/");
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
      expect(res.body.message).toBe("Welcome to Water My Plants");
    });

    // TEST REGISTER ENDPOINT
    it('add new a user', async () => {
      const users = await db('users');
      expect(users).toHaveLength(6);
      await Users.addUser({
        username: 'student89',
        password: 'password71',
        phone_number: '1234567891'
      })
      const newUsers = await db('users');
      expect(newUsers).toHaveLength(7);
    })
    it('check added user', async () => {
      const users = await db('users');
      expect(users).toHaveLength(6);
      await Users.addUser({
        username: 'student72',
        password: 'password72',
        phone_number: '1234567892'
      })
    })
    it('Status Code 201', () => {
      return request(server).post('/api/auth/register')
        .send({
          username: 'student73',
          password: 'password73',
          phone_number: '1234567893'
        })
        .expect(201);
    })
        //LOGIN TESTING
  

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
              username: 'student89',
              password: 'password71',
              phone_number: '1234567891'
            });
          expect(res.status).toEqual(201);
          res = await request(server)
            .post('/api/auth/login')
            .send({
              username: 'student89',
              password: 'password71'
            });
          expect(res.status).toEqual(200);
        })


        it("GET /api/auth/users", async () => { // returns list of users
          const res = await supertest(server).get("/users")
          expect(res.statusCode).toBe(200);
          expect(res.body).toBeDefined();
        });

        //  login first then update the user's phone number
        // it("POST /api/auth/login & PUT /users/:id", async () => {  
        //   const login = await supertest(server).post("/api/auth/login").send({
        //     username: "student89",
        //     password: "password71"
        //   });
          
        //   const update = await supertest(server)
        //   .put("/users/7")
        //   .set("authorization", login.body.token)
        //   .send({
        //       username: "student89",
        //       password: "password71",
        //       phone_number: "0987654321"
        //   })
      
        //   expect(update.status).toBe(200);
        //   expect(update.body.phone_number).toBe("0987654321");
        // });

  
  })

  // GET PLANTS
  
  describe('GET /api/plants', () => {
    
    it('return plants in JSON format', async () => {
      return request(server).get('/api/plants')
        .then(res => {
          expect(res.type).toMatch(/json/i)
        })
    })
    it('list of plants on successful login with token', async () => {
      res = await request(server)
        .post('/api/auth/register')
        .send({
          username: 'student81',
          password: 'password81',
          phone_number: '1234567891'
        });
      expect(res.status).toEqual(201);
      res = await request(server)
        .post('/api/auth/login')
        .send({
          username: 'student81',
          password: 'password81'
                  });
      expect(res.status).toEqual(200);
      const token = res.body.token;
    expect(token.length).toBeGreaterThan(20);
    res = await request(server)
      .get('/api/plants')
      .set({ authorization: token, Accept: 'application/json' });
    expect(res.body).toBeInstanceOf(Object);
    expect(res.status).toBe(200);

      });
   
    })


    // TESTING USER MODEL
    describe('users model', function () {
      beforeEach(async () => {
        await db('users').truncate();
      })
    
      describe('find()', function () {
        it('GET list of all users from the database', async function () {
          const users = await db('users');
          expect(users).toHaveLength(0);
          await Users.addUser({
            username: 'student71',
            password: 'password71',
            phone_number: '1234567891'
          });
          await Users.addUser({
            username: 'student72',
            password: 'password72',
            phone_number: '1234567892'
          });
          await Users.addUser({
            username: 'student73',
            password: 'password73',
            phone_number: '1234567893'
          });
          const newusers = await db('users');
          expect(newusers).toHaveLength(3);
          expect(users).not.toBeNull();
        })
      })
      describe('findById(id)', function () {
        it('Check if the user has an id', async function () {
          await Users.addUser({
            username: 'student71',
            password: 'password71',
            phone_number: '1234567891'
          });
          const user = await db('users');
          expect(user[0]).toHaveProperty('id');
        })
        it('Check if the user has the correct id', async function () {
          await Users.addUser({
            username: 'student71',
            password: 'password71',
            phone_number: '1234567891'
          });
          const newUser = await db('users');
          await Users.findByID(newUser[0].id);
          expect(newUser[0]).toHaveProperty('id', 1);
        })
      })
    })   


    
