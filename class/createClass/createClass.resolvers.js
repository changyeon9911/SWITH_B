import client from "../../client";
import { tutorProtector } from "../../tutor/tutor.utils";

export default {
    Mutation: {
        CreateClass: tutorProtector(
            async(_, { yyyy, mm, dd, order}, context) => {
                    //variables
                    const loggedInTutor = context.loggedInTutor;
                    //check if the email or username is already taken
                    const existingClass = await client.class.findFirst({
                        where:{
                            yyyy,
                            mm,
                            dd,
                            order,
                            tutor: {
                                connect: {
                                    id: loggedInTutor.id
                                }
                            }
                        }
                    });
                    if (existingClass) {
                        return {
                            ok: false,
                            error: "There's your Class on same time"
                        }
                    }
                    //create a Class
                    const newClass = await client.class.create({
                        data:{
                            yyyy,
                            mm,
                            dd,
                            order,
                            tutor: {
                                connect: {
                                    id: loggedInTutor.id
                                }
                            }
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