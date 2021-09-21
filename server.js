require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";
import schema from "./schema";
import { getAdmin } from "./admin/admin.utils";
import { getTutor } from "./tutor/tutor.utils";
import { getStdnt } from "./stdnt/stdnt.utils";

// GraphQL: 그래프 스케마를 기반으로 하나의 엔드포인트에서 클라이언트와 소통하는 디자인과 그것을 customization하는 언어 
// typeDefs: GQL을 짤 때, 사용될 데이터의 형식을 미리 정의(오류 방지)
// Query와 Mutation의 이름과 형식도 기재해주어 오류 방지
// resolvers: GQL에서 실재 Query와 Mutation 그리고 Subscription의 작동 로직 작성

const server = new ApolloServer({
    schema,
    context: async (ctx) => {
        if(ctx.req){
            const StdntOK = await getStdnt(ctx.req.headers.token)
            if (StdntOK) {
                return {
                    loggedInAdmin: null,
                    loggedInTutor: null,
                    loggedInStdnt: StdntOK,
                }
            }
            const TutorOK = await getTutor(ctx.req.headers.token)
            if (TutorOK) {
                return {
                    loggedInAdmin: null,
                    loggedInTutor: TutorOK,
                    loggedInStdnt: null,                    
                }
            }
            const AdminOK = await getAdmin(ctx.req.headers.token)
            if (AdminOK) {
                return {
                    loggedInAdmin: AdminOK,
                    loggedInTutor: null,
                    loggedInStdnt: null,
                }
            }
        }
    },
});
//schema를 웹서버에 연결해줌

const PORT = process.env.PORT;

server.listen(PORT).then(() => console.log(`server is running on ${PORT}`));
