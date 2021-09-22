import { gql } from 'apollo-server';

export default gql`
    type ViewClassResult {
        ok: Boolean!
        error: String
        class: Class
    }

    type Query {
        ViewClassStdnt(
            id: Int!
        ): ViewClassResult!,
        ViewClassTutor(
            id: Int!
        ): ViewClassResult!,
        ViewClassAdmin(
            id: Int!
        ): ViewClassResult!,
    }
`