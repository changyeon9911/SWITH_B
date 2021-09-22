import { gql } from 'apollo-server';

export default gql`
    type Mutation {
        DeleteClassAdmin(
            id: Int!
        ): DeleteClassResult!,
    }
`