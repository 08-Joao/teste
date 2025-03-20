import { validateUser } from './../data/schemas/user.schema';
import UserModel from "../data/models/user.model";
import { ILoginUser, ILoginUserResponse, User, UserInput } from "../interfaces/user.interface";
import { Auth } from '../../utils/auth';


export default class UserService { 
    private userModel: UserModel;

    constructor(userModel: UserModel) {
        this.userModel = userModel;
    }

    async createUser(data: User): Promise<User> {
        const { error } = validateUser(data);
        if (error) {
            throw error;
        }
        return this.userModel.createUser(data);
    }

    async getUsers(): Promise<User[]> {
        return this.userModel.getUsers();
    }

    async getUserById(id: number): Promise<User> {
        return this.userModel.getUserById(id);
    }

    async updateUser(id: number, data: UserInput): Promise<User> {
        return this.userModel.updateUser(id, data);
    }

    async deleteUser(id: number): Promise<User> {
        return this.userModel.deleteUser(id);
    }

    async loginUser(data: ILoginUser): Promise<ILoginUserResponse> {
        let user: User;
        try {
            user = await this.userModel.getUserByEmail(data.email);
        } catch {
            throw new Error('Usuário não encontrado');
        }
        if (!await Auth.comparePassword(data.password, user.password)) {
            throw new Error('Senha inválida');
        }
        const token = await Auth.generateToken(user.email, user.id, user.isAdmin);
        const response = { token, user }

        return response;
    }

}

