import client from "../../client";
import { adminProtector } from "../admin.utils";

export default {
    Query: {
        ListAdmin: adminProtector( 
            async() => {
                    try {
                        //List Admins
                        const Admins = await client.admin.findMany();
                        //successful
                        return {
                            ok: true,
                            admins: Admins
                        }
                    } catch {
                        return {
                            ok: false,
                            admins: null,
                        }
                    }
            })
    }
}