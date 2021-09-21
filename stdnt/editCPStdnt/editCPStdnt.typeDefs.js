import { gql } from 'apollo-server';

export default gql`
    type EditCPStdntResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        EditCPStdnt(
            delta: Int!
            addition: Boolean!
        ): EditCPStdntResult!,
    }
`