import client from "../../client";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        EditTbook: adminProtector(
            async(_, {id, type, name, description}) => {
                    //check if the Tbook exists
                    const existingTbook = await client.tbook.findFirst({where:{id}});
                    if (!existingTbook.id) {
                        return {
                            ok: false,
                            error: "Can't find the Textbook.";
                        }
                    }
                    //update the Textbook
                    const updatedTbook = await client.tbook.update({
                        where: {id},
                        data: {type, name, description},
                    });
                    if (!updatedTbook.id) {
                        return {
                            ok: false,
                            error: "Can't edit the Textbook"
                        }
                    }
                    return {
                        ok: true
                    }
            })
    }
}