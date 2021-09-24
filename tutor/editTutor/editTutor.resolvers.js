import client from "../../client";
import bcrypt from "bcrypt";
import { tutorProtector } from "../tutor.utils";

export default {
    Mutation: {
        EditTutor: tutorProtector(
            async(_, {email, password: newpassword}, context) => {
                //variables
                const loggedInTutor = context.loggedInTutor;
                let uglyPassword = null;
                //check if the account is existing
                const existingTutor = await client.tutor.findFirst({where:{id:loggedInTutor.id}});
                if (!existingTutor) {
                    return {
                        ok: false,
                        error: "Can't find the Tutor Account."
                    }     
                }                
                //hash the password
                if (newpassword) {
                    uglyPassword = await bcrypt.hash(newpassword, 10); 
                };                  
                //update & return the Result
                const updatedTutor = await client.tutor.update({
                    where: {
                        id:loggedInTutor.id,
                    },
                    data: {
                        email,
                        ...(uglyPassword && {password: uglyPassword}),
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