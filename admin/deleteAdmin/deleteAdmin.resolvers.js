import client from "../../client";
import bcrypt from "bcrypt";

export default {
    Mutation: {
        DeleteAdmin: async(
            _,
            {id, password}
            ) => {
                    //check if the account is existing
                    const existingAdmin = await client.admin.findFirst({where:{id}});
                    if (!existingAdmin) {
                        return {
                            ok: false,
                            error: "Can't find the Admin Account."
                        }     
                    }
                    //check password
                    const passwordOK = await bcrypt.compare(password, existingAdmin.password);
                    if (!passwordOK) {
                        return {
                            ok: false,
                            error: "Wrong Password."
                        }     
                    }
                    //delete Admin
                    const deletedAdmin = await client.admin.delete({where:{id}});
                    if (deletedAdmin) {
                        return {
                            ok: true
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Can't delete the Admin Account."
                        }
                    }
            }
    }
}