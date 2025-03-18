import { PrismaClient } from "@prisma/client";
import { SubscriptionPlan } from "../../interfaces/subscriptionPlan.interface";

export class SubscriptionPlanModel {
    private prisma = new PrismaClient();

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async createSubscriptionPlan(data: SubscriptionPlan): Promise<SubscriptionPlan> {
        return await this.prisma.subscriptionPlan.create({ data });
    }

    async getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
        return await this.prisma.subscriptionPlan.findMany();
    }

    async getSubscriptionPlanById(id: number): Promise<SubscriptionPlan> {
        return await this.prisma.subscriptionPlan.findUniqueOrThrow({ where: { id } });
    }

    async updateSubscriptionPlan(id: number, data: SubscriptionPlan): Promise<SubscriptionPlan> {
        return await this.prisma.subscriptionPlan.update({ where: { id }, data });
    }

    async deleteSubscriptionPlan(id: number): Promise<SubscriptionPlan> {
        return await this.prisma.subscriptionPlan.delete({ where: { id } });
    }
}