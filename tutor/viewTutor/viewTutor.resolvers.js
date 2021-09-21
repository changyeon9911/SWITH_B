import client from "../../client";

export default {
    Query: {
        ViewTutor: async(_, {username}) => {
                    //check if the username is existing.
                    const existingTutor = await client.tutor.findFirst({where:{username}});
                    if (!existingTutor) {
                        return {
                            ok: false,
                            error: "Can't find the account.",
                        }
                    }
                    //successful
                    return {
                        ok: true,
                        tutor: existingTutor,
                    }                                    
            }
    }
}