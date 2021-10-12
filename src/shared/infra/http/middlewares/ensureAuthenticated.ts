import { AppError } from '../../../errors/AppError';
import { verify } from "jsonwebtoken";
import { Request, NextFunction, Response } from "express";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization;

    if(!authHeader) {
        throw new AppError("Token missing!", 401)
    }

    const [, token] = authHeader.split(" ");

    try {
       const { sub: user_id } = verify(token, "fcac8d15d4d184621103c4427fb88d25") as IPayload;

       const usersRepository = new UsersRepository();

       const user =  await usersRepository.findById(user_id);

       if(!user) {
           throw new AppError("User does not exists!", 401)
       }

       req.user = {
           id: user_id
       }

       next()
       
    } catch{
        throw new AppError("Invalid token!", 401)
    }
    
}