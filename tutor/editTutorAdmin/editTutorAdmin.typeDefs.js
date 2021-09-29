import { gql } from 'apollo-server';

export default gql`
    type EditTutorResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        EditTutorAdmin(
            id: Int!
            email: String
            password: String
            adminpassword: String!
            bio: String
            avatar: Upload
        ): EditTutorResult!,
    }
`