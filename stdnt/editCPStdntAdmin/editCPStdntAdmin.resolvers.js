import client from "../../client";
import bcrypt from "bcrypt";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        EditCPStdntAdmin: adminProtector(
            async(_, {id, delta, addition, adminpassword}, context) => {
                //check adminpassword
                const loggedInAdmin = context.loggedInAdmin;
                const passwordOK = bcrypt.compare(adminpassword, loggedInAdmin.password);
                if (!passwordOK) {
                    return {
                        ok: false,
                        error: "Wrong Password."
                    }
                }
                //check if the account exist.
                const targetStdnt = await client.stdnt.findFirst({where:{id}});
                if (!targetStdnt.id) {
                    return {
                        ok: false,
                        error: "Can't find the Account."
                    }
                }
                //edit the cpnum
                let newCPnum = targetStdnt.cpnum;
                if (addition) {
                    newCPnum = newCPnum + delta;
                } else {
                    newCPnum = newCPnum - delta;
                }
                const updatedStdnt = await client.stdnt.update({
                    where: { id },
                    data: { cpnum: newCPnum },
                });
                if (!updatedStdnt.id) {
                    return {
                        ok: false,
                        error: "Error in changing your Coupon Count."
                    }
                }
                return {
                    ok: true
                }
        })
    }
}