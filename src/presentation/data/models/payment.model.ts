import { PrismaClient } from "@prisma/client";
import { Payment } from "../../interfaces/payment.interface";

export class PaymentModel {
    private prisma = new PrismaClient()

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async createPayment(data: Payment): Promise<Payment> {
        return await this.prisma.payment.create({ data });
    }

    async getPayments(): Promise<Payment[]> {
        return await this.prisma.payment.findMany();
    }

    async getPaymentById(id: number): Promise<Payment> {
        return await this.prisma.payment.findUniqueOrThrow({ where: { id } });
    }
    
    async updatePayment(id: number, data: Payment): Promise<Payment> {
        return await this.prisma.payment.update({ where: { id }, data });
    }

    async deletePayment(id: number): Promise<Payment> {
        return await this.prisma.payment.delete({ where: { id } });
    }
}