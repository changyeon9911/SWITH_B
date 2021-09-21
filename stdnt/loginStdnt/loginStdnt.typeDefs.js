import { gql } from 'apollo-server';

export default gql`
    type LoginStdntResult {
        ok: Boolean!
        error: String
        token: String
    }

    type Mutation {
        LoginStdnt(
            username: String!
            password: String!
        ): LoginStdntResult!,
    }
`