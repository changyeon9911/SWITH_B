import client from "../../client";
import bcrypt from "bcrypt";

export default {
    Mutation: {
        CreateStdnt: async(
            _,
            {email, username, password}
            ) => {
                try {
                    //check if the email or username is already taken
                    const existingStdnt = await client.stdnt.findFirst({
                        where:{
                            OR: [{email}, {username}]
                        }
                    });
                    if (existingStdnt) {
                        throw new Error("The username(or Email) is already taken.");
                    }
                    //hash the password
                    const uglyPassword = await bcrypt.hash(password, 10);
                    //save & return the Stdnt
                    const Stdnt = await client.stdnt.create({data:{
                                                            email,
                                                            username,
                                                            password: uglyPassword,}});
                    return {
                        ok: true
                    }                                    
                } catch (error) {
                    return {
                        ok: false,
                        error: "Can't create an Student account.",
                    }
            }
            }
    }
}