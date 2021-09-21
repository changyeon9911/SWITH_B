import { gql } from 'apollo-server';

export default gql`
    type Mutation {
        EditStdntAdmin(
            id: Int!
            email: String
            password: String
            adminpassword: String
        ): EditStdntResult!,
    }
`