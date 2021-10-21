import crypto from "crypto"
import  multer  from 'multer';
import { resolve } from 'path';

const tmpFolder = resolve(__dirname, "..", "..", "tmp")


export default {
    tmpFolder,

    storage: multer.diskStorage({
        destination: tmpFolder,
        filename: (req, file, callback) => {
            const fileHash = crypto.randomBytes(16).toString("hex");

            console.log(file);
            
            //@ts-ignore
            const fileName = `${fileHash}-${file.originalName}`

            return callback(null, fileName)
        }
    })

} 