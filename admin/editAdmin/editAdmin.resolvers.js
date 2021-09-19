import client from "../../client";
import bcrypt from "bcrypt";

export default {
    Mutation: {
        EditAdmin: async(
            _,
            {email, username, password}
            ) => {
                try {
                    //check if the email or username is already taken
                    const existingAdmin = await client.admin.findFirst({
                        where:{
                            OR: [{email}, {username}]
                        }
                    });
                    if (existingAdmin) {
                        throw new Error("The username(or Email) is already taken.")
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