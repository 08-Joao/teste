import { BillingInfo } from "./billingInfo.interface";
import { Payment } from "./payment.interface";
import { Subscription } from "./subscription.interface";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  subscription?: Subscription[];
  payments?: Payment[];
  billingInfo?: BillingInfo;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput {
  name: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginUserResponse{
  token: string;
  user: User;
}