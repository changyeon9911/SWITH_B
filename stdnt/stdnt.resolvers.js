import client from "../client";

export default {
    Stdnt: {
        classes: ({id}) => client.stdnt.findUnique({where:{id}}).classes(),
        cpcodes: ({id}) => client.stdnt.findUnique({where:{id}}).cpcodes(),
    }
}