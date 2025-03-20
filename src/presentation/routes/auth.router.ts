import { Prisma } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


export class AuthRouter(fastify: FastifyInstance) {
    fastify.post('/auth/login',
        async (request: FastifyRequest, reply: FastifyReply) => {
            Prisma
        }
    )

    
}