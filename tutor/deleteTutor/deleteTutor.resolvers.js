import client from "../../client";
import bcrypt from "bcrypt";
import { tutorProtector } from "../tutor.utils";

export default {
    Mutation: {
        DeleteTutor: tutorProtector(
            async(_, {id, password}, context) => {
                //check if the account is existing
                const existingTutor = await client.tutor.findFirst({where:{id}});
                if (!existingTutor) {
                    return {
                        ok: false,
                        error: "Can't find the Tutor Account."
                    }     
                }                
                //check password
                const loggedInTutor = context.loggedInTutor;
                const passwordOK = await bcrypt.compare(password, loggedInTutor.password);
                if (!passwordOK) {
                    return {
                        ok: false,
                        error: "Wrong Password."
                    }     
                }
                //delete Tutor
                const deletedTutor = await client.tutor.delete({where:{id:loggedInTutor.id}});
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