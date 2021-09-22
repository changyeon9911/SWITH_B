import client from "../../client";
import { tutorProtector } from "../../tutor/tutor.utils";

export default {
    Mutation: {
        DeleteClass: tutorProtector(
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
                            error: "You can't delete booked Classes."
                        }
                    }
                    //delete Class
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