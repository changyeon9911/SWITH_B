import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
    Mutation: {
        LoginTutor: async(
            _,
            {username, password}
            ) => {
                    //check if the username exist
                    const existingTutor = await client.tutor.findFirst({where:{username}});
                    if (!existingTutor) {
                        return {
                            ok: false,
                            error: "Wrong Username"
                        } 
                    }
                    //check the password
                    const passwordOK = await bcrypt.compare(password, existingTutor.password);
                    if (!passwordOK) {
                        return {
                            ok: false,
                            error: "Wrong Password"
                        }
                    }
                    //issue & send token
                    const token = await jwt.sign({id: existingTutor.id, type: "Tutor"}, process.env.SECRET_KEY);
                    return {
                        ok: true,
                        token,
                    }                                    
            }
    }
}