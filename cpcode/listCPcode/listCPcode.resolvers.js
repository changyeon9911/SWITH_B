import client from "../../client";
import { adminProtector } from "../admin.utils";

export default {
    Query: {
        ListCPcode: adminProtector( 
            async() => {
                    try {
                        //List CPcodes
                        const CPcodes = await client.cpcode.findMany();
                        //successful
                        return CPcodes;
                    } catch {
                        return null;
                    }
            });
    }
}