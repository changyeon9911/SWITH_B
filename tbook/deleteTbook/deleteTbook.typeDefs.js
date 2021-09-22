import { gql } from "apollo-server";

export default gql`
    type DeleteTbookResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        DeleteTbook(
            id: Int!
        ): DeleteTbookResult!
    }
`