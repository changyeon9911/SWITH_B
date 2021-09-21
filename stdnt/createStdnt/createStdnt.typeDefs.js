import { gql } from 'apollo-server';

export default gql`
    type CreateStdntResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        CreateStdnt(
            email: String!
            username: String!
            password: String!
        ): CreateStdntResult!,
    }
`