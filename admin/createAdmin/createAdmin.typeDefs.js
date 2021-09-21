import { gql } from 'apollo-server';

export default gql`
    type CreateAdminResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        CreateAdmin(
            email: String!
            username: String!
            password: String!
            validation: String!
        ): CreateAdminResult!,
    }
`