import client from "../../client";
import { tutorProtector } from "../../tutor/tutor.utils";
import { adminProtector } from "../../admin/admin.utils";

export default {
    Mutation: {
        CreateFdback: tutorProtector(
            async(_, {classId, content}, {loggedInTutor}) => {
                    //check if the class exists
                    const existingClass = await client.class.findFirst({where:{id: classId}});
                    if (!existingClass.id) {
                        return {
                            ok: false,
                            error: "Can't find the Class."
                        }
                    }
                    //check if the tutor has a access to the class
                    const accessOK = (existingClass.tutorId === loggedInTutor.id);
                    if (!accessOK) {
                        return {
                            ok: false,
                            error: "You don't have the access to this class"
                        }
                    }
                    //check if there are no fdbacks yet
                    if (existingClass.fdbacks.length > 0) {
                        return {
                            ok: false,
                            error: "A Feedback has been already made for the class."
                        }
                    }
                    //create a fdback
                    const newFdback = await client.fdback.create({
                        data:{
                            class: {
                                connect: {
                                    id: classId
                                }
                            },
                            content}});
                    if (!newFdback.id) {
                        return {
                            ok: false,
                            error: "Can't create a new Feedback"
                        }
                    }
                    return {
                        ok: true
                    }
            }),
        CreateFdbackAdmin: adminProtector(
            async(_, {classId, content}) => {
                    //check if the class exists
                    const existingClass = await client.class.findFirst({where:{id: classId}});
                    if (!existingClass.id) {
                        return {
                            ok: false,
                            error: "Can't find the Class."
                        }
                    }
                    //check if there are no fdbacks yet
                    if (existingClass.fdbacks.length > 0) {
                        return {
                            ok: false,
                            error: "A Feedback has been already made for the class."
                        }
                    }
                    //create a fdback
                    const newFdback = await client.fdback.create({
                        data:{
                            class: {
                                connect: {
                                    id: classId
                                }
                            },
                            content}});
                    if (!newFdback.id) {
                        return {
                            ok: false,
                            error: "Can't create a new Feedback"
                        }
                    }
                    return {
                        ok: true
                    }
            })
    }
}