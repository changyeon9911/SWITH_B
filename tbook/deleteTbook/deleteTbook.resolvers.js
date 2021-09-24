import client from "../../client";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        DeleteTbook: adminProtector(
            async(_, {id}) => {
                    //check if the Tbook exists
                    const existingTbook = await client.tbook.findFirst({where:{id}});
                    if (!existingTbook.id) {
                        return {
                            ok: false,
                            error: "Can't find the Textbook"
                        }
                    }
                    //delete the Textbook
                    const deletedTbook = await client.tbook.delete({where:{id}});
                    if (!deletedTbook.id) {
                        return {
                            ok: false,
                            error: "Can't delete the Textbook"
                        }
                    }
                    return {
                        ok: true
                    }
            })
    }
}