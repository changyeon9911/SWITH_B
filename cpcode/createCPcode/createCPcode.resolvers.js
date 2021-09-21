import client from "../../client";
import bcrypt from "bcrypt";
import { adminProtector } from "../admin.utils";

export default {
    Mutation : {
        CreateCPcode: adminProtector(
            async(_, {code, numclass}) => {
                //variables
                const UglyCode = await bcrypt.hash(code, 10);
                //check if the CPcode already exist.
                const existingCPcode = await client.cpcode.findFirst({where:{code: UglyCode}});
                if (existingCPcode) {
                    return {
                        ok: false,
                        error: "The code has been already taken."
                    }
                };
                //create a new CPcode.
                const CPcode = await client.cpcode.create({
                    data: {
                        code: UglyCode,
                        numclass,
                    }
                });
                if (CPcode.id) {
                    return {
                        ok: true,
                    }
                } else {
                    return {
                        ok: false,
                        errro: "Can't Create a CPcode."
                    }
                }
            }
        )
    }
}