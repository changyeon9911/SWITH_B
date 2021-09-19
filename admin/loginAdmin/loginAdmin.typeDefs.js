import { gql } from 'apollo-server';

export default gql`
    type LoginAdminResult {
        ok: Boolean!
        error: String
        token: String
    }

    type Mutation {
        LoginAdmin(
            username: String!
            password: String!
        ): LoginAdminResult!,
    }
`