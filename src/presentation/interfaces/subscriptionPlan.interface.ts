export interface SubscriptionPlan {
  id: number;
  nome: string;
  valor: number;
  duracaoDias: number;
  subscriptions?: null;
  createdAt?: Date;
  updatedAt?: Date;
}
