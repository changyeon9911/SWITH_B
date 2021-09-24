import client from "../../client";
import bcrypt from "bcrypt";
import { stdntProtector } from "../stdnt.utils";

export default {
    Mutation: {
        EditStdnt: stdntProtector(
            async(_, {email, password: newpassword}, context) => {
                //variables
                const loggedInStdnt = context.loggedInStdnt;
                let uglyPassword = null;
                //check if the account is existing
                const existingStdnt = await client.stdnt.findFirst({where:{id:loggedInStdnt.id}});
                if (!existingStdnt) {
                    return {
                        ok: false,
                        error: "Can't find the Student Account."
                    }     
                }                
                //hash the password
                if (newpassword) {
                    uglyPassword = await bcrypt.hash(newpassword, 10); 
                };                  
                //update & return the Result
                const updatedStdnt = await client.stdnt.update({
                    where: {
                        id:loggedInStdnt.id,
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