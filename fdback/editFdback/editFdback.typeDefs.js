import { gql } from "apollo-server";

export default gql`
    type EditFdbackResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        EditFdback(
            classId: Int!
            content: String
        ): EditFdbackResult!,
        EditFdbackAdmin(
            classId: Int!
            content: String
        ): EditFdbackResult!
    }
`