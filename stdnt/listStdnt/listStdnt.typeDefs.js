import { gql } from 'apollo-server';

export default gql`
    type ListStdntResult {
        ok: Boolean!
        error: String
        stdnts: [Stdnt]
    }
    type Query {
        ListStdnt: ListStdntResult!,
    }
`