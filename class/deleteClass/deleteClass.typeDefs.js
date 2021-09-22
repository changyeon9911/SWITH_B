import { gql } from 'apollo-server';

export default gql`
    type DeleteClassResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        DeleteClass(
            id: Int!
        ): DeleteClassResult!,
    }
`