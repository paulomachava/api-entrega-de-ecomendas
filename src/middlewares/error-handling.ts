import { AppError } from "@/utils/AppError"
import { Request,Response,NextFunction } from "express"
import { ZodError } from "zod"

export function errorHandling(
    error:any,
    request:Request,
    response:Response,
    next:NextFunction
){
   
   //Verificar se o error e uma instancia de AppError
   if(error instanceof AppError) {
    return response.status(error.statusCode).json({message:error.message})
   }
//verificar se o error e uma instancia de zod Errorr
if(error instanceof ZodError){
    return response.status(400).json({
        message:"Validation Errorr",
        issues:error.format(),
    })
}
 return response.status(500).json({message:error.message})
}