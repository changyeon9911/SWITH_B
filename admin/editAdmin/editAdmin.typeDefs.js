import { gql } from 'apollo-server';

export default gql`
    type EditAdminResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        EditAdmin(
            email: String
            password: String
        ): EditAdminResult!,
    }
`