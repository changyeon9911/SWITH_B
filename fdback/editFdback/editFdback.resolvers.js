import client from "../../client";
import { adminProtector } from "../../admin/admin.utils";
import { tutorProtector } from "../../tutor/tutor.utils";

export default {
    Mutation: {
        EditFdback: tutorProtector(
            async(_, {classId, content}, {loggedInTutor}) => {
                    //check if the Fdback exists
                    const existingFdback = await client.fdback.findFirst({where:{classId}});
                    if (!existingFdback.id) {
                        return {
                            ok: false,
                            error: "Can't find the Feedback."
                        }
                    }
                    //check if the user has the access to the class.
                    const existingClass = await client.class.findFirst({where: {id: classId}});
                    const accessOK = (existingClass.tutorId === loggedInTutor.id);
                    if (!accessOK) {
                        return {
                            ok: false,
                            error: "You don't have a access to the class"
                        }
                    }
                    //update the Feedback
                    const updatedFdback = await client.fdback.update({
                        where: {id:exsingFdback.id},
                        data: {content},
                    });
                    if (!updatedFdback.id) {
                        return {
                            ok: false,
                            error: "Can't edit the Feedback"
                        }
                    }
                    return {
                        ok: true
                    }
            }),
        EditFdbackAdmin: adminProtector(
            async(_, {classId, content}) => {
                    //check if the Fdback exists
                    const existingFdback = await client.fdback.findFirst({where:{classId}});
                    if (!existingFdback.id) {
                        return {
                            ok: false,
                            error: "Can't find the Feedback."
                        }
                    }
                    //update the Feedback
                    const updatedFdback = await client.fdback.update({
                        where: {id:exsingFdback.id},
                        data: {content},
                    });
                    if (!updatedFdback.id) {
                        return {
                            ok: false,
                            error: "Can't edit the Feedback"
                        }
                    }
                    return {
                        ok: true
                    }
            })            
    }
}