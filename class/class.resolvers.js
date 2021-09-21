import client from "../client"

export default {
    Class : {
        tutor: ({tutorId}) =>{
            return client.tutor.findUnique({where:{id:tutorId}})
        },
        stdnt: ({stdntId}) =>{
            return client.stdnt.findUnique({where:{id:stdntId}})
        },
        tbook: ({tbookId}) =>{
            return client.tbook.findUnique({where:{id:tbookId}})
        },
    }
}