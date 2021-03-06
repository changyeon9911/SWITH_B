import { gql } from 'apollo-server';

export default gql`
    type CreateTutorResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        CreateTutor(
            email: String!
            username: String!
            password: String!
        ): CreateTutorResult!,
    }
`