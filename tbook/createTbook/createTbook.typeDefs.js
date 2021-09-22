import { gql } from "apollo-server";

export default gql`
    type CreateTbookResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        CreateTbook(
            type: String!
            name: String!
            description: String!
        ): CreateTbookResult!
    }
`