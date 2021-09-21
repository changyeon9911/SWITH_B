import { gql } from 'apollo-server';

export default gql`
    type Mutation {
        DeleteTutor(
            id: Int!
            password: String!
        ): DeleteTutorResult!,
    }
`