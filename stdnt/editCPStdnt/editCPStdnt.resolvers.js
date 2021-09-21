import client from "../../client";
import { stdntProtector } from "../stdnt.utils";

export default {
    Mutation: {
        EditCPStdnt: stdntProtector(
            async(_, {delta, addition}, context) => {
                //variables
                const loggedInStdnt = context.loggedInStdnt;
                let newCPnum = loggedInStdnt.cpnum;
                //edit the cpnum
                if (addition) {
                    newCPnum = newCPnum + delta;
                } else {
                    newCPnum = newCPnum - delta;
                }
                const updatedStdnt = await client.stdnt.update({
                    where: { id: loggedInStdnt.id },
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