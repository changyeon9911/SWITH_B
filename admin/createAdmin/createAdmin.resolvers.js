import client from "../../client";
import bcrypt from "bcrypt";

export default {
    Mutation: {
        CreateAdmin: async(
            _,
            {email, username, password, validation}
            ) => {
                try {
                    //validation process
                    const validationOK = (validation === process.env.SECRET_KEY);
                    if (!validationOK) {
                        throw new Error("Invalid");
                    }
                    //check if the email or username is already taken
                    const existingAdmin = await client.admin.findFirst({
                        where:{
                            OR: [{email}, {username}]
                        }
                    });
                    if (existingAdmin) {
                        throw new Error("The username(or Email) is already taken.");
                    }
                    //hash the password
                    const uglyPassword = await bcrypt.hash(password, 10);
                    //save & return the Admin
                    const Admin = await client.admin.create({data:{
                                                            email,
                                                            username,
                                                            password: uglyPassword,}});
                    return {
                        ok: true
                    }                                    
                } catch (error) {
                    return {
                        ok: false,
                        error: "Can't create an Admin account.",
                    }
            }
            }
    }
}