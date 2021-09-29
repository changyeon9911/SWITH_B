import { gql } from 'apollo-server';

export default gql`
    type EditTutorResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        EditTutor(
            email: String
            password: String
            bio: String
            avatar: Upload
        ): EditTutorResult!,
    }
`