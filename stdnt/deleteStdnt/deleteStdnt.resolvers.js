import client from "../../client";
import bcrypt from "bcrypt";
import { stdntProtector } from "../stdnt.utils";

export default {
    Mutation: {
        DeleteStdnt: stdntProtector(
            async(_, {id, password}, context) => {
                //check if the account is existing
                const existingStdnt = await client.stdnt.findFirst({where:{id}});
                if (!existingStdnt) {
                    return {
                        ok: false,
                        error: "Can't find the Student Account."
                    }     
                }                
                //check password
                const loggedInStdnt = context.loggedInStdnt;
                const passwordOK = await bcrypt.compare(password, loggedInStdnt.password);
                if (!passwordOK) {
                    return {
                        ok: false,
                        error: "Wrong Password."
                    }     
                }
                //delete Stdnt
                const deletedStdnt = await client.stdnt.delete({where:{id:loggedInStdnt.id}});
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