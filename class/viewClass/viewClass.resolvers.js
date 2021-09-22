import client from "../../client";
import { stdntProtector } from "../../stdnt/stdnt.utils";
import { tutorProtector } from "../../tutor/tutor.utils";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Query: {
        ViewClassStdnt: stdntProtector(async(_, {id}, {loggedInStdnt}) => {
                    //check if the class(that I participate) is existing.
                    const existingClass = await client.class.findFirst({where:{id, stdntId: loggedInStdnt.id}});
                    if (!existingClass) {
                        return {
                            ok: false,
                            error: "You are not in this Class.",
                        }
                    }
                    //successful
                    return {
                        ok: true,
                        class: existingClass,
                    }                                    
            }),
        ViewClassTutor: tutorProtector(async(_, {id}, {loggedInTutor}) => {
                    //check if the class(that I participate) is existing.
                    const existingClass = await client.class.findFirst({where:{id, tutorId: loggedInTutor.id}});
                    if (!existingClass) {
                        return {
                            ok: false,
                            error: "You are not in this Class.",
                        }
                    }
                    //successful
                    return {
                        ok: true,
                        class: existingClass,
                    }                                           
            }),
        ViewClassAdmin: adminProtector(async(_, {id}, {loggedInAdmin}) => {
                    //check if the class exists.
                    const existingClass = await client.class.findFirst({where:{id}});
                    if (!existingClass) {
                        return {
                            ok: false,
                            error: "Can't find the Class.",
                        }
                    }
                    //successful
                    return {
                        ok: true,
                        class: existingClass,
                    }                                           
            }),       
    }
}