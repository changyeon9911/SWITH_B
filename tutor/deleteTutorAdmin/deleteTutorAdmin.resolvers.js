import client from "../../client";
import bcrypt from "bcrypt";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        DeleteTutorAdmin: adminProtector(
            async(_, {id, password}, context) => {
                //check if the account is existing
                const existingTutor = await client.tutor.findFirst({where:{id}});
                if (!existingTutor) {
                    return {
                        ok: false,
                        error: "Can't find the Tutor Account."
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
                const deletedTutor = await client.tutor.delete({where:{id}});
                if (deletedTutor.id) {
                    return {
                        ok: true
                    }
                } else {
                    return {
                        ok: false,
                        error: "Can't delete the Tutor Account."
                    }
                }
        })
    }
}