import client from "../../client";

export default {
    Query: {
        ListTbook: async() => {
                    const tbooks = client.tbook.findMany();
                    return tbooks;
            }
    }
}