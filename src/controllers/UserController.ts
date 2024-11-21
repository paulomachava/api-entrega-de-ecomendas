import {Response,Request} from "express"

class UsersController{


    create(request:Request,response:Response){
        return response.json({message:"user created"})
    }
}

export {UsersController}