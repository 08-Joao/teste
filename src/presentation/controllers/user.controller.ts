import { getPrismaClient } from "@prisma/client/runtime/library";
import UserModel from "../data/models/user.model";
import UserService from "../services/user.service"
import { FastifyReply, FastifyRequest } from "fastify";
import { validateUser } from "../data/schemas/user.schema";
import { ILoginUser, ILoginUserResponse, User, UserInput } from "../interfaces/user.interface";

const userService = new UserService(new UserModel(getPrismaClient));

export default class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public createUser = async (req: FastifyRequest,res: FastifyReply): Promise<void> => {
        try {
            // Validação com Zod
            const result = validateUser(req.body);

            if (!result.success) {
                res.status(400).send({
                  success: false,
                  message: 'Dados de usuário inválidos',
                  errors: result.error.errors.map(err => ({
                    path: err.path.join('.'),
                    message: err.message 
                  }))
                });
                return;
            }

            // Os dados já estão validados e tipados corretamente
            const userData: User = result.data;
            const newUser = await this.userService.createUser(userData);

            res.status(201).send({
                success: true,
                message: 'Usuário criado com sucesso',
                data: newUser
            })

        } catch (error) {
            res.status(500).send({
                success: false,
                message: error instanceof Error ? error.message : 'Erro ao criar usuário',

            })
        }
    }

    public getUsers = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
        try {
            const users = await this.userService.getUsers();
            res.status(200).send({
                success: true,
                message: 'Usuários buscados com sucesso',
                data: users
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Erro ao buscar usuários',
            });
        }
    }

    public getUserById = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
        try {
            const userId = parseInt((req.params as { id: string }).id);            
            const user = await this.userService.getUserById(userId);

            res.status(200).send({
                success: true,
                message: 'Usuário buscado com sucesso',
                data: user
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Erro ao buscar usuário',
            });
        }
    }

    public udpateUser = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
        try {
            const userId = parseInt((req.params as { id: string }).id);
            const userData: UserInput = req.body as UserInput;
            const user = await this.userService.updateUser(userId, userData);

            res.status(200).send({
                success: true,
                message: 'Usuário atualizado com sucesso',
                data: user
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Erro ao atualizar usuário',
            });
        }
    }

    public deleteUser = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
        try {
            const userId = parseInt((req.params as { id: string }).id);
            const user = await this.userService.deleteUser(userId);

            res.status(200).send({
                success: true,
                message: 'Usuário deletado com sucesso',
                data: user
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Erro ao deletar usuário',
            });
        }
    }

    public loginVendedor = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
        try {
            const data: ILoginUser = req.body as ILoginUser;
            const response = await this.userService.loginUser(data);
            res.status(200).send({
                success: true,
                message: "Login realizado com sucesso",
                data: response
            });
        } catch (error) {
            res.status(401).send({
                success: false,
                message: "Erro no login",
            });
        }
    }
    

}