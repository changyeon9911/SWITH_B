import client from "../../client";
import { adminProtector } from "../admin.utils";

export default {
    Query: {
        ViewAdmin: adminProtector( 
            async(_, {username}) => {
                    //check if the username is existing.
                    const existingAdmin = await client.admin.findFirst({where:{username}});
                    if (!existingAdmin) {
                        return {
                            ok: false,
                            error: "Can't find the account.",
                        }
                    }
                    //successful
                    return {
                        ok: true,
                        admin: existingAdmin,
                    }                                    
            })
    }
}