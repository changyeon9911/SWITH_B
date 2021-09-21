import client from "../client";

export default {
    Tutor: {
        classes: ({id}) => client.tutor.findUnique({where:{id}}).classes(),
    }
}