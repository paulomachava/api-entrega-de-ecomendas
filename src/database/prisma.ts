import { PrismaClient } from "@prisma/client";
//arquivo de importacao de base de dados
export const prisma = new PrismaClient({
    log:process.env.NODE_ENV === "production" ? [] :["query"]
})