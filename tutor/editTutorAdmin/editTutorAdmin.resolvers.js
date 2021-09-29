import client from "../../client";
import bcrypt from "bcrypt";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        EditTutorAdmin: adminProtector(
            async(_, {id, email, password: newpassword, adminpassword, bio, avatar}, context) => {
                //check if the account is existing
                const existingTutor = await client.tutor.findFirst({where:{id}});
                if (!existingTutor) {
                    return {
                        ok: false,
                        error: "Can't find the Tutor Account."
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
                const updatedTutor = await client.tutor.update({
                    where: {
                        id,
                    },
                    data: {
                        email,
                        ...(uglyPassword && {password: uglyPassword}),
                        bio,
                    }
                });
                if (updatedTutor.id) {
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