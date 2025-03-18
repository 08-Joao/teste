import { PrismaClient } from "@prisma/client";
import { User, UserInput } from "../../interfaces/user.interface";


export default class UserModel { 
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async createUser(data: UserInput): Promise<User> {
        return this.prisma.User.create({data});
    }

    async getUsers(): Promise<User[]> {
        return this.prisma.User.findMany();
    }

    async getUserById(id: number): Promise<User> {
        return this.prisma.User.findUniqueOrThrow({ where: {id} });
    }

    async updateUser(id: number, data: UserInput): Promise<User> {
        return this.prisma.User.update({ where: { id }, data });
    }

    async deleteUser(id: number): Promise<User> {
        return this.prisma.User.delete({ where: { id } });
    }
}