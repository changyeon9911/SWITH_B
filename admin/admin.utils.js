import jwt from "jsonwebtoken"
import client from "../client"

export const getAdmin = async(token) => {
    try {
        if (!token) {
            return null;
        }
        const { id, type } = await jwt.verify(token, process.env.SECRET_KEY)
        if (type !== "Admin"){
            return null;
        }
        const Admin = await client.admin.findFirst({where:{id}});
        if (Admin) {
            return Admin;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const adminProtector = (ourResolver) => (root, arg, context, info) => {
    if (!context.loggedInAdmin){
        return {
            ok: false,
            error: "Admin Login Required."
        }
    }
    return ourResolver(root, arg, context, info);
};