import { gql } from 'apollo-server';

export default gql`
    type RegisterClassResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        RegisterClass(
            classId: Int!,
            tbookId: Int!
        ): RegisterClassResult!,
    }
`