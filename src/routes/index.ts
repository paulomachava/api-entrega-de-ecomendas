//centralizando todas routas


import { Router } from "express";
import { usersRoutes } from "./UserRoutes";

const routes =Router()

routes.use("/users",usersRoutes)

export {routes}
