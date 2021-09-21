import { gql } from 'apollo-server';

export default gql`
    type ListTutorResult {
        ok: Boolean!
        error: String
        stdnts: [Tutor]
    }
    type Query {
        ListTutor: ListTutorResult!,
    }
`