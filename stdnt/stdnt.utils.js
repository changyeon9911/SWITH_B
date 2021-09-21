import jwt from "jsonwebtoken"
import client from "../client"

export const getStdnt = async(token) => {
    try {
        if (!token) {
            return null;
        }
        const { id, type } = await jwt.verify(token, process.env.SECRET_KEY);
        if (type !== "Stdnt") {
            return null;
        }
        const Stdnt = await client.stdnt.findFirst({where:{id}});
        if (Stdnt) {
            return Stdnt;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const stdntProtector = (ourResolver) => (root, arg, context, info) => {
    if (context.loggedInStdnt) {
        return ourResolver(root, arg, context, info);
    } else {
        return {
            ok: false,
            error: "Student Login Required."
        }
    }
};