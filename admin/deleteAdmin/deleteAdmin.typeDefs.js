import { gql } from 'apollo-server';

export default gql`
    type DeleteAdminResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        DeleteAdmin(
            id: Int!
            password: String!
        ): DeleteAdminResult!,
    }
`