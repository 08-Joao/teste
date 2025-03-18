import { User } from "./user.interface";

export interface Payment {
  id: string;
  valor: number;
  dataDeExecucao?: Date;
  dataDeReembolso?: Date;
  status: string;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
