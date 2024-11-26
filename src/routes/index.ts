//centralizando todas routas


import { Router } from "express";
import { usersRoutes } from "./UserRoutes";
import { sessionsRoutes } from "./SessionRoutes";
import { deliveriesRoutes } from "./DeliveriesRoutes";

const routes =Router()

routes.use("/users",usersRoutes)
routes.use("/sessions",sessionsRoutes)
routes.use("/deliveries",deliveriesRoutes)

export {routes}
