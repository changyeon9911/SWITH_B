import client from "../../client";
import bcrypt from "bcrypt";
import { adminProtector } from "../admin.utils";

export default {
    Mutation: {
        EditAdmin: adminProtector(
            async(_, {email, password: newpassword}, {loggedInAdmin}) => {
                    //variables
                    const id = loggedInAdmin.id;
                    let uglyPassword = null;
                    //hash the password
                    if (newpassword) {
                        uglyPassword = await bcrypt.hash(newpassword, 10); 
                    };
                    //update & return the Result
                    const updatedAdmin = await client.admin.update({
                        where: {
                            id,
                        },
                        data: {
                            email,
                            ...(uglyPassword && {password: uglyPassword}),
                        }
                    });
                    if (updatedAdmin.id) {
                        return {
                            ok: true
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Can't update the Account."
                        }
                    }                      
            }),
    }
}