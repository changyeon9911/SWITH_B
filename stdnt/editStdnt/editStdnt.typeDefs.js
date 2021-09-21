import { gql } from 'apollo-server';

export default gql`
    type EditStdntResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        EditStdnt(
            email: String
            password: String
        ): EditStdntResult!,
    }
`