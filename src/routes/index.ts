//centralizando todas routas


import { Router } from "express";
import { usersRoutes } from "./UserRoutes";
import { sessionsRoutes } from "./SessionRoutes";
import { deliveriesRoutes } from "./DeliveriesRoutes";
import { deliveryLogsRoutes } from "./delivery-logs-routes";

const routes =Router()

routes.use("/users",usersRoutes)
routes.use("/sessions",sessionsRoutes)
routes.use("/deliveries",deliveriesRoutes)
routes.use("/delivery-logs",deliveryLogsRoutes)

export {routes}
