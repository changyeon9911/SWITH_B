import { gql } from 'apollo-server';

export default gql`
    type DeleteStdntResult {
        ok: Boolean!
        error: String
    }
    
    type Mutation {
        DeleteStdnt(
            id: Int!
            password: String!
        ): DeleteStdntResult!,
    }
`