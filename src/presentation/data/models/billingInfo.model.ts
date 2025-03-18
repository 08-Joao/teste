import { PrismaClient } from "@prisma/client";
import { BillingInfo } from "../../interfaces/billingInfo.interface";

export class BillingInfoModel {
    private prisma = new PrismaClient();

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async createBillingInfo(data: BillingInfo): Promise<BillingInfo> {
        return await this.prisma.billingInfo.create({ data });
    }

    async getBillingInfos(): Promise<BillingInfo[]> {
        return await this.prisma.billingInfo.findMany();
    }

    async getBillingInfoById(id: number): Promise<BillingInfo> {
        return await this.prisma.billingInfo.findUnique({ where: { id } });
    }

    async updateBillingInfo(id: number, data: BillingInfo): Promise<BillingInfo> {
        return await this.prisma.billingInfo.update({ where: { id }, data });
    }

    async deleteBillingInfo(id: number): Promise<BillingInfo> {
        return await this.prisma.billingInfo.delete({ where: { id } });
    }
}