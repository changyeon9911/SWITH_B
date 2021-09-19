import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
    Mutation: {
        LoginAdmin: async(
            _,
            {username, password}
            ) => {
                    //check if the username exist
                    const existingAdmin = await client.admin.findFirst({where:{username}});
                    if (!existingAdmin) {
                        return {
                            ok: false,
                            error: "Wrong Username"
                        } 
                    }
                    //check the password
                    const passwordOK = await bcrypt.compare(password, existingAdmin.password);
                    if (!passwordOK) {
                        return {
                            ok: false,
                            error: "Wrong Password"
                        }
                    }
                    //issue & send token
                    const token = await jwt.sign({id: existingAdmin.id}, process.env.SECRET_KEY);
                    return {
                        ok: true,
                        token,
                    }                                    
            }
    }
}