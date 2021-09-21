import { gql } from "apollo-server";

export default gql`
    type DeleteCPcodeResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        DeleteCPcode(
            id: Int!
        ): DeleteCPcodeResult!
    }
`