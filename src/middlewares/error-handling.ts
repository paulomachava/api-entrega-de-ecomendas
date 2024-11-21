import { AppError } from "@/utils/AppError"
import { Request,Response,NextFunction } from "express"

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

 return response.status(500).json({message:error.message})
}