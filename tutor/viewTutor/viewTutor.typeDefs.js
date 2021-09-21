import { gql } from 'apollo-server';

export default gql`
    type ViewTutorResult {
        ok: Boolean!
        error: String
        tutor: Tutor
    }

    type Query {
        ViewTutor(
            username: String!
        ): ViewTutorResult!,
    }
`