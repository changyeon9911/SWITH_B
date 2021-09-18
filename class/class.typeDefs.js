import { gql } from "apollo-server";

export default gql`
    type Class {
        id: Int!
        yyyy: Int!
        mm: Int!
        dd: Int!
        order: Int!
        tutor: Tutor!
        stdnt: Stdnt
        tbook: TBook
    }
`

