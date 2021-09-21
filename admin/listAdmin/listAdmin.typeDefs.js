import { gql } from 'apollo-server';

export default gql`
    type ListAdminResult {
        ok: Boolean!
        error: String
        admins: [Admin]
    }
    type Query {
        ListAdmin: ListAdminResult!,
    }
`