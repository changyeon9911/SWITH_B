import client from "../../client";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Query: {
        ViewCPcode: adminProtector( 
            async(_, {id}) => {
                    //check if the CPcode exists.
                    const existingCPcode = await client.cpcode.findFirst({where:{id}});
                    if (!existingCPcode) {
                        return {
                            ok: false,
                            error: "Can't find the CPcode.",
                        }
                    }
                    //successful
                    return {
                        ok: true,
                        cpcode: existingCPcode,
                    }                                    
            })
    }
}