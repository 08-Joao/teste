import { PrismaClient } from "@prisma/client";
import { Subscription } from './../../interfaces/subscription.interface';

export class SubscriptionModel {
    private prisma = new PrismaClient();

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async createSubscription(data: Subscription): Promise<Subscription> {
        return this.prisma.Subscription.create({ data });
    }

    async getSubscriptions(): Promise<Subscription[]> {
        return this.prisma.Subscription.findMany();
    }

    async getSubscriptionById(id: number): Promise<Subscription> {
        return this.prisma.Subscription.findUniqueOrThrow({ where: { id } });
    }

    async updateSubscription(id: number, data: Subscription): Promise<Subscription> {
        return this.prisma.Subscription.update({ where: { id }, data });
    }

    async deleteSubscription(id: number): Promise<Subscription> {
        return this.prisma.Subscription.delete({ where: { id } });
    }
}