import client from "../../client";
import { stdntProtector } from "../../stdnt/stdnt.utils";
import { tutorProtector } from "../../tutor/tutor.utils";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Query: {
        ListClassStdnt: stdntProtector(async(_, {}, {loggedInStdnt}) => {
                    try {
                        const existingClasses = await client.class.findMany({where:{stdntId: loggedInStdnt.id, cancle: false}});
                        return {
                            ok: true,
                            classes: existingClasses,
                        }
                    } catch {
                        return {
                            ok: false,
                            error: "Error in loading your classes"
                        }
                    }  
            }),
        ListClassTutor: tutorProtector(async(_, {}, {loggedInTutor}) => {
                    try {
                        const existingClasses = await client.class.findMany({where:{tutorId: loggedInTutor.id, cancle: false}});
                        return {
                            ok: true,
                            classes: existingClasses,
                        }
                    } catch {
                        return {
                            ok: false,
                            error: "Error in loading your classes"
                        }
                    }
            }),
        ListClassAdmin: adminProtector(async(_, {tutorId, stdntId}) => {
                    if (tutorId | stdntId) {
                        const existingClasses = await client.class.findMany({
                            where: {
                                ...(tutorId && {tutorId}),
                                ...(stdntId && {stdntId}),
                                cancle: false,
                            }
                        });
                        return existingClasses;            
                    } else {
                        const existingClasses = await client.class.findMany();
                        return existingClasses;
                    }
            }),       
    }
}