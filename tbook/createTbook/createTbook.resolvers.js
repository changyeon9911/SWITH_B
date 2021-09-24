import client from "../../client";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        CreateTbook: adminProtector(
            async(_, {type, name, description}) => {
                    //check if the Tbook name is already taken
                    const existingTbook = await client.tbook.findFirst({where:{name}});
                    if (existingTbook) {
                        return {
                            ok: false,
                            error: "The name has been already taken."
                        }
                    }
                    //create the Textbook
                    const Tbook = await client.tbook.create({data:{type, name, description}});
                    if (!Tbook.id) {
                        return {
                            ok: false,
                            error: "Can't create a Textbook"
                        }
                    }
                    return {
                        ok: true
                    }
            })
    }
}