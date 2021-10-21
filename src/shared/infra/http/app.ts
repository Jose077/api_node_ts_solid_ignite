import upload  from '@config/upload';
import { AppError } from '../../errors/AppError';
import { NextFunction, Request, Response } from 'express';
import express from 'express';
import "express-async-errors"
import createConnection from  "../typeorm"

import "../../container"


import swaggerUi from "swagger-ui-express"
import swaggerFile from "../../../swagger.json"

import { router } from './routes';

createConnection("localhost");

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`));
app.use("/avatar", express.static(`${upload.tmpFolder}/cars`));


app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

export { app }
