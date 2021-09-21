import client from "../client"

export default {
    CPcode : {
        stdnt: ({stdntId}) =>{
            return client.stdnt.findUnique({where:{id:stdntId}})
        }
    }
}