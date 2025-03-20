import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { LoginSchemaJson } from "../data/schemas/user.schema";
import UserController from "../controllers/user.controller";
import UserService from "../services/user.service";
import UserModel from "../data/models/user.model";
import { PrismaClient } from "@prisma/client";

// Criando instância do Prisma corretamente
const prisma = new PrismaClient();
const userService = new UserService(new UserModel(prisma));
const userController = new UserController(userService);

async function UserRouter(fastify: FastifyInstance) {
    fastify.post(
        "/login",
        {
            schema: { body: LoginSchemaJson },
        },
        async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                await userController.loginVendedor(request, reply);
            } catch (error) { 
                console.warn("Erro no login do usuário:", error);
                return reply.status(401).send({ message: "Credenciais inválidas" });
            }
        }
    );
}


export default UserRouter;
