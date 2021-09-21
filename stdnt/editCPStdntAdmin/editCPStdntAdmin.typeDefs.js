import { gql } from 'apollo-server';

export default gql`
    type Mutation {
        EditCPStdntAdmin(
            id: Int!
            delta: Int!
            addition: Boolean!
            adminpassword: String!
        ): EditCPStdntResult!,
    }
`