import { gql } from "apollo-server";

export default gql`
    type CreateFdbackResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        CreateFdback(
            classId: Int!
            content: String!
        ): CreateFdbackResult!,
        CreateFdbackAdmin(
            classId: Int!
            content: String!
        ): CreateFdbackResult!
    }
`