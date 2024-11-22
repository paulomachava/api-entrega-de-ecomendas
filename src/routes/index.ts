//centralizando todas routas


import { Router } from "express";
import { usersRoutes } from "./UserRoutes";
import { sessionsRoutes } from "./SessionRoutes";

const routes =Router()

routes.use("/users",usersRoutes)
routes.use("/sessions",sessionsRoutes)

export {routes}
