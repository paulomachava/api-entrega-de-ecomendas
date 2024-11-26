import request from "supertest"
import {app} from "@/app"
import {prisma} from "@/database/prisma"
import { response } from "express"


describe ("UsersController",()=>{
   let user_id:string

   afterAll( async ()=>{
     await prisma.user.delete({where: {id: user_id}})
   })

    it("shoul create a new user sucessfully", async()=>{
        const response = await request(app).post("/users").send({
            name:"Test User",
            email:"testuser@example.com",
            password:"password123"
        }

        )

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body.name).toBe("Test User")
        user_id = response.body.id
    })
    it("should throw an error if user with same email alredy exists", async()=>{
        const response = await request(app).post("/users").send({
            name:"Duplicate user",
            email:"testuser@example.com",
            password:"password123"
    })
   expect(response.status).toBe(400)
   expect(response.body.message).toBe("User with same email exists")
    })

    it("should throw a validation error if email is invalid",async ()=>{
        const response = await request(app).post("/users").send ({
            name:"Test user",
            email:"invalid email",
            password:"password123"
        })
        expect(response.status).toBe(400)
        expect(response.body.message).toBe("Validation Errorr")
    })
})