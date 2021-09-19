import { gql } from 'apollo-server';

export default gql`
    type ViewAdminResult {
        ok: Boolean!
        error: String
        admin: Admin
    }

    type Query {
        ViewAdmin(
            username: String!
        ): ViewAdminResult!,
    }
`