import { gql } from 'apollo-server';

export default gql`
    type ViewStdntResult {
        ok: Boolean!
        error: String
        stdnt: Stdnt
    }

    type Query {
        ViewStdnt(
            username: String!
        ): ViewStdntResult!,
    }
`