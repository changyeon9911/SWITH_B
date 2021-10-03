import client from "../../client";
import { stdntProtector } from "../../stdnt/stdnt.utils"
import { tutorProtector } from "../../tutor/tutor.utils";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        CancleClassStdnt: stdntProtector(
            async(_, {id}, context) => {
                    const loggedInStdnt = context.loggedInStdnt;
                    //check if the class is existing
                    const existingClass = await client.class.findFirst({where:{id, stdntId: loggedInStdnt.id}});
                    if (!existingClass) {
                        return {
                            ok: false,
                            error: "Can't find a Class."
                        }
                    }
                    if (existingClass.cancle) {
                        return {
                            ok: false,
                            error: "This Class is already cancled."
                        }
                    }
                    //cancle Class
                    const cancledClass = await client.class.update({where:{id}, data: {cancle: true}});
                    if (cancledClass.id) {
                        return {
                            ok: true
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Can't cancle the Class."
                        }
                    }
            }),
        CancleClassTutor: tutorProtector(
            async(_, {id}, context) => {
                    const loggedInTutor = context.loggedInTutor;
                    //check if the class is existing
                    const existingClass = await client.class.findFirst({where:{id, tutorId: loggedInTutor.id}});
                    if (!existingClass) {
                        return {
                            ok: false,
                            error: "Can't find a Class."
                        }
                    }
                    if (existingClass.stdntId) {
                        return {
                            ok: false,
                            error: "You can't cancle booked Classes."
                        }
                    }
                    if (existingClass.cancle) {
                        return {
                            ok: false,
                            error: "This Class is already cancled."
                        }
                    }
                    //cancle Class
                    const cancledClass = await client.class.update({where:{id}, data: {cancle: true}});
                    if (cancledClass.id) {
                        return {
                            ok: true
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Can't cancle the Class."
                        }
                    }
            }),
        CancleClassAdmin: adminProtector(
            async(_, {id}) => {
                    const existingClass = await client.class.findFirst({where:{id}});
                    if (!existingClass) {
                        return {
                            ok: false,
                            error: "Can't find a Class."
                        }
                    }
                    if (existingClass.cancle) {
                        return {
                            ok: false,
                            error: "This Class is already cancled."
                        }
                    }
                    //cancle Class
                    const cancledClass = await client.class.update({where:{id}, data: {cancle: true}});
                    if (cancledClass.id) {
                        return {
                            ok: true
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Can't cancle the Class."
                        }
                    }
            })
    }
}