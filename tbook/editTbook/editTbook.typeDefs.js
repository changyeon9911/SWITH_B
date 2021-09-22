import { gql } from "apollo-server";

export default gql`
    type EditTbookResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        EditTbook(
            id: Int!
            type: String
            name: String
            description: String
        ): EditTbookResult!
    }
`