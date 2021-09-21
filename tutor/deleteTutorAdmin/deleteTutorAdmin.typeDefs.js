import { gql } from 'apollo-server';

export default gql`
    type DeleteTutorResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        DeleteTutorAdmin(
            id: Int!
            password: String!
        ): DeleteTutorResult!,
    }
`