import axios from 'axios';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config();

const authService = process.env.AUTH_SERVICE as string;
const JWT_SECRET = process.env.JWT_SECRET as string;
const SALT_ROUNDS = 10;

if (!JWT_SECRET) { // Making sure we have a JWT SECRET to generate tokens
    throw new Error("JWT_SECRET is not defined in the environment variables.");
}


export class Auth {
    static async verifyToken(token: string): Promise<{ id: number }> {
        
    }

    static async hashPassword(password: string): Promise<string> { 
        return await bcrypt.hash(password, SALT_ROUNDS);
    }

    static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }

    // Add a method to return if its Admin or Not
    static generateToken(user: string, id: number, isAdmin: boolean): string {
        return jwt.sign({ user, id, isAdmin }, JWT_SECRET, { expiresIn: '48h' });
    }

    static verifyJwt(token: string): { user: string, id: number } {
        return jwt.verify(token, JWT_SECRET) as { user: string, id: number };
    }
}