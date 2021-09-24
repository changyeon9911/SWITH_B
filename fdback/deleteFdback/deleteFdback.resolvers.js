import client from "../../client";
import { adminProtector } from "../../admin/admin.utils";
import { tutorProtector } from "../../tutor/tutor.utils";

export default {
    Mutation: {
        DeleteFdback: tutorProtector(
            async(_, {classId}, {loggedInTutor}) => {
                    //check if the fdback exists
                    const existingFdback = await client.fdback.findFirst({where:{classId}});
                    if (!existingFdback.id) {
                        return {
                            ok: false,
                            error: "Can't find the Fdback"
                        }
                    }
                    //check if the tutor has access to the class
                    const existingClass = await client.class.findFirst({where:{id: classId}});
                    const accessOK = (existingClass.tutorId === loggedInTutor.id);
                    if (!accessOK) {
                        return {
                            ok: false,
                            error: "You don't have the access to the class."
                        }
                    }
                    //delete the Fdback
                    const deletedFdback = await client.fdback.delete({where:{id: existingFdback.id}});
                    if (!deletedFdback.id) {
                        return {
                            ok: false,
                            error: "Can't delete the Feedback"
                        }
                    }
                    return {
                        ok: true
                    }
            }),
        DeleteFdbackAdmin: adminProtector(
            async(_, {classId}) => {
                    //check if the fdback exists
                    const existingFdback = await client.fdback.findFirst({where:{classId}});
                    if (!existingFdback.id) {
                        return {
                            ok: false,
                            error: "Can't find the Fdback"
                        }
                    }
                    //delete the Fdback
                    const deletedFdback = await client.fdback.delete({where:{id: existingFdback.id}});
                    if (!deletedFdback.id) {
                        return {
                            ok: false,
                            error: "Can't delete the Feedback"
                        }
                    }
                    return {
                        ok: true
                    }
            })            
    }
}