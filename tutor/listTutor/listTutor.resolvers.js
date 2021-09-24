import client from "../../client";

export default {
    Query: {
        ListTutor: async() => {
                    try {
                        //List Tutor
                        const Tutors = await client.tutor.findMany();
                        //successful
                        return {
                            ok: true,
                            tutors: Tutors
                        }
                    } catch {
                        return {
                            ok: false,
                            tutors: null,
                        }
                    }
            }
    }
}