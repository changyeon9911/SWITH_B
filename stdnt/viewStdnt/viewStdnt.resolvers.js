import client from "../../client";

export default {
    Query: {
        ViewStdnt: async(_, {username}) => {
                    //check if the username is existing.
                    const existingStdnt = await client.stdnt.findFirst({where:{username}});
                    if (!existingStdnt) {
                        return {
                            ok: false,
                            error: "Can't find the account.",
                        }
                    }
                    //successful
                    return {
                        ok: true,
                        stdnt: existingStdnt,
                    }                                    
            }
    }
}