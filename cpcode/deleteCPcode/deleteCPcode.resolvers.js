import client from "../../client";
import { adminProtector } from "../admin.utils";

export default {
    Mutation : {
        DeleteCPcode: adminProtector(
            async(_, {id}) => {
                //check if the CPcode exist.
                const existingCPcode = await client.cpcode.findFirst({where:{id}});
                if (!existingCPcode) {
                    return {
                        ok: false,
                        error: "Can't finde the CPcode."
                    }
                };
                //Delete the CPcode.
                const deletedCPcode = await client.cpcode.delete({where:{id}});
                if (deletedCPcode.id) {
                    return {
                        ok: true,
                    }
                } else {
                    return {
                        ok: false,
                        errro: "Can't Delete the CPcode."
                    }
                }
            }
        )
    }
}