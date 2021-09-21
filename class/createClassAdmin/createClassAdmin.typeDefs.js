import { gql } from 'apollo-server';

export default gql`
    type Mutation {
        CreateClassAdmin(
            yyyy: Int!
            mm: Int!
            dd: Int!
            order: Int!
            tutorId: Int!
            stdntId: Int
            tbookId: Int
        ): CreateClassResult!,
    }
`
