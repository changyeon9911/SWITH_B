import client from "../../client";
import bcrypt from "bcrypt";
import { stdntProtector } from "../stdnt.utils";

export default {
    Mutation: {
        AddCPStdnt: stdntProtector(
            async(_, {passcode}, context) => {
                //variables
                const loggedInStdnt = context.loggedInStdnt;
                const UglyCode = await bcrypt.hash(passcode, 10);
                //check if the passcode exist
                const existingCPCode = await client.cpcode.findFirst({where:{passcode:UglyCode}});
                if (!existingCPCode) {
                    return {
                        ok: false,
                        error: "Wrong Passcode."
                    }
                }
                //check the CP is not yet used.
                if (existingCPCode.used) {
                    return {
                        ok: false,
                        error: "This passcode has been already used."
                    }
                }
                //add the cpnum
                const newCPnum = loggedInStdnt.cpnum + existingCPCode.numclass;
                const updatedStdnt = await client.stdnt.update({
                    where: { id: loggedInStdnt.id },
                    data: { cpnum: newCPnum },
                });
                if (!updatedStdnt.id) {
                    return {
                        ok: false,
                        error: "Error in increasing your Coupon Count."
                    }
                }
                //change the CPCode state
                const updatedCPCode = await client.cpcode.update({
                    where: { id: existingCPCode.id },
                    data: {
                        used: true,
                        stdnt: {
                            connect: {
                                id: loggedInStdnt.id
                            }
                        }
                    },
                });
                if (!updatedCPCode.id) {
                    return {
                        ok: true,
                        error: "Error in treating the Coupon Value."
                    }
                }
                return {
                    ok: true
                }
        })
    }
}