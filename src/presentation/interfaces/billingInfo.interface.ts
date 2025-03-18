import { User } from "./user.interface";

export interface BillingInfo {
  id: number;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  pais: string;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
