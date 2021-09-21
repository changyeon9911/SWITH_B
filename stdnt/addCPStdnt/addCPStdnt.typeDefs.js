import { gql } from 'apollo-server';

export default gql`
    type AddCPStdntResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        AddCPStdnt(
            passcode: String!
        ): AddCPStdntResult!,
    }
`