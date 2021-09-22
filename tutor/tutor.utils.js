import jwt from "jsonwebtoken"
import client from "../client"

export const getTutor = async(token) => {
    try {
        if (!token) {
            return null;
        }
        const { id, type } = await jwt.verify(token, process.env.SECRET_KEY);
        if (type !== "Tutor") {
            return null;
        }
        const Tutor = await client.tutor.findFirst({where:{id}});
        if (Tutor) {
            return Tutor;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const tutorProtector = (ourResolver) => (root, arg, context, info) => {
    if (context.loggedInTutor) {
        return ourResolver(root, arg, context, info);
    } else {
        return {
            ok: false,
            error: "Tutor Login Required."
        }
    }
};
