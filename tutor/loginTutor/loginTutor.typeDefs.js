import { gql } from 'apollo-server';

export default gql`
    type LoginTutorResult {
        ok: Boolean!
        error: String
        token: String
    }

    type Mutation {
        LoginTutor(
            username: String!
            password: String!
        ): LoginTutorResult!,
    }
`