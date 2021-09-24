import client from "../../client";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        DeleteClassAdmin: adminProtector(
            async(_, {id}) => {
                    //check if the Class exists
                    const existingClass = await client.class.findFirst({where:{id}});
                    if (!existingClass.id) {
                        return {
                            ok: false,
                            error: "Can't find the Class."
                        }     
                    }
                    //delete the Class
                    const deletedClass = await client.class.delete({where:{id}});
                    if (deletedClass.id) {
                        return {
                            ok: true
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Can't delete the Class."
                        }
                    }
            }
        )
    }
}