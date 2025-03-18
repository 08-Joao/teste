import { BillingInfo } from "./billingInfor.interface";
import { Payment } from "./payment.interface";
import { Subscription } from "./subscription.interface";

export interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
  subscription?: Subscription[];
  payments?: Payment[];
  billingInfo?: BillingInfo;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput {
  nome: string;
  email: string;
  senha: string;
}