import { gql } from "apollo-server";

export default gql`
    type DeleteFdbackResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        DeleteFdback(
            classId: Int!
        ): DeleteFdbackResult!,
        DeleteFdbackAdmin(
            classId: Int!
        ): DeleteFdbackResult!,
    }
`