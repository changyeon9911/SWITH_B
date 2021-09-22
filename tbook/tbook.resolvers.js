import client from "../client";

export default {
    Tbook: {
        classes: ({id}) => client.tbook.findUnique({where:{id}}).classes()    
    }
}