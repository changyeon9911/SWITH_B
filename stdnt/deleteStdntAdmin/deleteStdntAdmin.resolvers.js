import client from "../../client";
import bcrypt from "bcrypt";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        DeleteStdntAdmin: adminProtector(
            async(_, {id, password}, context) => {
                //check if the account is existing
                const existingStdnt = await client.stdnt.findFirst({where:{id}});
                if (!existingStdnt) {
                    return {
                        ok: false,
                        error: "Can't find the Student Account."
                    }     
                }                
                //check the admin password
                const passwordokadmin = await bcrypt.compare(password, context.loggedInAdmin.password);
                if (!passwordokadmin) {
                    return {
                        ok: false,
                        error: "Wrong Password."
                    }
                }
                //delete the stdnt account
                const deletedStdnt = await client.stdnt.delete({where:{id}});
                if (deletedStdnt.id) {
                    return {
                        ok: true
                    }
                } else {
                    return {
                        ok: false,
                        error: "Can't delete the Stdnt Account."
                    }
                }
        })
    }
}