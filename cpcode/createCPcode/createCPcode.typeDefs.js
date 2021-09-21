import { gql } from "apollo-server";

export default gql`
    type CreateCPcodeResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        CreateCPcode(
            code: String!
            numclass: Int!
        ): CreateCPcodeResult!
    }
`