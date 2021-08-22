import { verify } from "jsonwebtoken";
import { Request, NextFunction, Response } from "express";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization;

    if(!authHeader) {
        throw new Error("Token missing!")
    }

    const [, token] = authHeader.split(" ");

    try{
       const { sub: user_id } = verify(token, "fcac8d15d4d184621103c4427fb88d25") as IPayload;
       console.log(user_id);

       const usersRepository = new UsersRepository();

       const user =  await usersRepository.findById(user_id);

       if(!user) {
           throw new Error("User does not exists!")
       }

       next()
       
    } catch{
        throw new Error("Invalid token!")
    }
    
}