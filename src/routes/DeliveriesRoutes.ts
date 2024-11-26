import { Router } from "express";
import { DeliveriesController } from "@/controllers/DeliveriesController";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";


const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(ensureAuthenticated,verifyUserAuthorization(["sale"]))
deliveriesRoutes.post("/", deliveriesController.create)

export {deliveriesRoutes}