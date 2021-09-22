import client from "../../client";
import { stdntProtector } from "../../stdnt/stdnt.utils";

export default {
    Mutation: {
        RegisterClass: stdntProtector(
            async(_, {classId, tbookId}, context) => {
                    const loggedInStdnt = context.loggedInStdnt;
                    //check if the tbook exists
                    const existingTbook = await client.tbook.findFirst({where:{id:tbookId}});
                    if (!existingTbook) {
                        return {
                            ok: false,
                            error: "Can't find the Text Book."
                        }
                    }
                    //check if the class exists
                    const existingClass = await client.class.findFirst({where:{id:classId}});
                    if (!existingClass) {
                        return {
                            ok: false,
                            error: "Can't find the Class."
                        }
                    }
                    //check if there's any reservation.
                    if (existingClass.stdntId) {
                        return {
                            ok: false,
                            error: "This Class is booked by other person."
                        }
                    }
                    //register Class
                    const registeredClass = await client.class.update({
                        where:{classId},
                        data: {
                            stdnt: {
                                connect: {
                                    id: loggedInStdnt.id
                                }
                            }
                        },
                    });
                    if (registeredClass.id) {
                        return {
                            ok: true
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Can't register the Class."
                        }
                    }
            }
        )
    }
}