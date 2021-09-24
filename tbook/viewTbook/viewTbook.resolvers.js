import client from "../../client";

export default {
    Query: {
        ViewTbook: async(_, {id}) => {
                    //check if the Tbook exists
                    const existingTbook = await client.tbook.findFirst({where:{id}});
                    if (!existingTbook.id) {
                        return {
                            ok: false,
                            error: "Can't find the Textbook.";
                        }
                    }
                    return existingTbook;
            }
    }
}