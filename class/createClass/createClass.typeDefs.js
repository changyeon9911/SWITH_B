import { gql } from 'apollo-server';

export default gql`
    type CreateClassResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        CreateClass(
            yyyy: Int!
            mm: Int!
            dd: Int!
            order: Int!
        ): CreateClassResult!,
    }
`
