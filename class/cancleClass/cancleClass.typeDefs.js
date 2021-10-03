import { gql } from 'apollo-server';

export default gql`
    type CancleClassResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        CancleClassStdnt(
            id: Int!
        ): CancleClassResult!,
        CancleClassTutor(
            id: Int!
        ): CancleClassResult!,
        CancleClassAdmin(
            id: Int!
        ): CancleClassResult!,
    }
`
