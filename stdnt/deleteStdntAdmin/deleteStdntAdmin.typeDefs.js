import { gql } from 'apollo-server';

export default gql`
    type Mutation {
        DeleteStdntAdmin(
            id: Int!
            password: String!
        ): DeleteStdntResult!,
    }
`