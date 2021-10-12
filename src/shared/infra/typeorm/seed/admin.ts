import { hash } from "bcrypt"
import { v4 as uuidV4 } from "uuid"

import createConnection from "../index"

async function create() {
    const connectoin = await createConnection("localhost");

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connectoin.query(
       `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license )
         VALUES('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXXX')
       `
    );

    await connectoin.close;
}

create().then(() => console.log("User admin created!")).catch((err) => {
    console.log("error abruabruabrua: ", err);

})

