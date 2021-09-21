import client from "../../client";
import bcrypt from "bcrypt";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        EditStdntAdmin: adminProtector(
            async(_, {id, email, password: newpassword, adminpassword}, context) => {
                //check if the account is existing
                const existingStdnt = await client.stdnt.findFirst({where:{id}});
                if (!existingStdnt) {
                    return {
                        ok: false,
                        error: "Can't find the Student Account."
                    }     
                }                
                //check the admin password
                const passwordOK = await bcrypt.compare(adminpassword, context.loggedInAdmin.password);
                if (!passwordOK) {
                    return {
                        ok: false,
                        error: "Wrong Password."
                    }
                }
                //hash the password
                let uglyPassword = null;
                if (newpassword) {
                    uglyPassword = await bcrypt.hash(newpassword, 10); 
                };                
                //update & return the Result
                const updatedStdnt = await client.stdnt.update({
                    where: {
                        id,
                    },
                    data: {
                        email,
                        ...(uglyPassword && {password: uglyPassword}),
                    }
                });
                if (updatedStdnt.id) {
                    return {
                        ok: true
                    }
                } else {
                    return {
                        ok: false,
                        error: "Can't update the Account."
                    }
                }    
        })
    }
}