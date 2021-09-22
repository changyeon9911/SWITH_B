import { gql } from 'apollo-server';

export default gql`
    type Query {
        ListClassStdnt: [Class],
        ListClassTutor: [Class],
        ListClassAdmin(
            tutorId: Int
            stdntId: Int
        ): [Class],
    }
`