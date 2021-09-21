import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
    Mutation: {
        LoginStdnt: async(
            _,
            {username, password}
            ) => {
                    //check if the username exist
                    const existingStdnt = await client.stdnt.findFirst({where:{username}});
                    if (!existingStdnt) {
                        return {
                            ok: false,
                            error: "Wrong Username"
                        } 
                    }
                    //check the password
                    const passwordOK = await bcrypt.compare(password, existingStdnt.password);
                    if (!passwordOK) {
                        return {
                            ok: false,
                            error: "Wrong Password"
                        }
                    }
                    //issue & send token
                    const token = await jwt.sign({id: existingStdnt.id, type: "Stdnt"}, process.env.SECRET_KEY);
                    return {
                        ok: true,
                        token,
                    }                                    
            }
    }
}