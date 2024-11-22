import {Response,Request} from "express"
import { prisma } from "@/database/prisma"
import {hash} from "bcrypt"
import {z} from "zod"
import { AppError } from "@/utils/AppError"

class UsersController{


    async create(request:Request,response:Response){
        
         
        //validando dados do usuario com zod

        const bodySchema = z.object({
            name:z.string().trim().min(1),
            email:z.string().email(),
            password:z.string().min(6)
        })

        const {name,email,password}=bodySchema.parse(request.body)

        //verificar se existe um usuario com email cadastrado
        const withSameEmail =await prisma.user.findFirst({where:{email}})
        if(withSameEmail){
            throw new AppError("User with same email exists")
        }
        
        //gerar criptografia para senha do usuario
        const hashedpassword = await hash(password,8)
         
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedpassword
            }
        })
        //nao mostrar a senha 
        const {password:_,...userWithoutPassword} = user

        return response.status(201).json(userWithoutPassword)
    }
}

export {UsersController}