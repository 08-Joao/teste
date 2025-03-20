import { SubscriptionEvent } from "./subscriptionEvent.interface";
import { SubscriptionPlan } from "./subscriptionPlan.interface";
import { User } from "./user.interface";

export interface Subscription {
  id: number;
  inicio: Date;
  renovacao?: Date;
  termino?: Date;
  status: string;
  user: User;
  plan: SubscriptionPlan;
  subscriptionEvent: SubscriptionEvent[];
  createdAt?: Date;
  updatedAt?: Date;
}
