import client from "../client"

export default {
    Fdback : {
        class: ({classId}) =>{
            return client.class.findUnique({where:{id:classId}})
        }
    }
}