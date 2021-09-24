import client from "../../client";

export default {
    Query: {
        ListStdnt: async() => {
                    try {
                        //List Stdnt
                        const Stdnts = await client.stdnt.findMany();
                        //successful
                        return {
                            ok: true,
                            stdnts: Stdnts
                        }
                    } catch {
                        return {
                            ok: false,
                            stdnts: null,
                        }
                    }
            }
    }
}