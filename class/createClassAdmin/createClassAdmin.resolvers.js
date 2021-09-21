import client from "../../client";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        CreateClassAdmin: adminProtector(
            async(_, { yyyy, mm, dd, order, tutorId, stdntId, tbookId}) => {
                    //check if class was already made
                    const existingClass = await client.class.findFirst({
                        where:{
                            yyyy,
                            mm,
                            dd,
                            order,
                            tutor: {
                                connect: {
                                    id: tutorId
                                }
                            }
                        }
                    });
                    if (existingClass) {
                        return {
                            ok: false,
                            error: "The tutor has a Class on same time"
                        }
                    }
                    //create a Class
                    const newClass = await client.class.create({
                        data:{
                            yyyy,
                            mm,
                            dd,
                            order,
                            tutor: {connect:{id:tutorId}},
                            ...(stdntId && {stdnt:{connect:{id:stdntId}}}),
                            ...(tbookId && {tbook:{connect:{id:tbookId}}}),
                        }
                    });
                    if (newClass.id) {
                        return {
                            ok: true,
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Failed to make a new Class."
                        }
                    }
            })
    }
}