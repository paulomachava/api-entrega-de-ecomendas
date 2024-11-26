import { Request,Response,NextFunction } from "express";
import {prisma} from "@/database/prisma"
import {z} from "zod"

class DeliveriesController{
    async create(request:Request,response:Response,next:NextFunction){
      const bodySchema = z.object({
        user_id:z.string().uuid(), //Este user_id e id do usuario a qual vai ser envidado
        description:z.string(),

      })

      const {user_id,description} = bodySchema.parse(request.body)
      await prisma.delivery.create({
        data:{
          userId:user_id,
          description
        }

})

      return response.status(201).json()
    }
}


export{DeliveriesController}