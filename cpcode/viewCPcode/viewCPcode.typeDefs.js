import { gql } from 'apollo-server';

export default gql`
    type ViewCPcodeResult {
        ok: Boolean!
        error: String
        cpcode: CPcode
    }

    type Query {
        ViewCPcode(
            id: Int!
        ): ViewCPcodeResult!,
    }
`