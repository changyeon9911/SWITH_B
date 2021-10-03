import { gql } from "apollo-server";

export default gql`
    type Class {
        id: Int!
        yyyy: Int!
        mm: Int!
        dd: Int!
        order: Int!
        tutor: Tutor!
        cancle: Bool!
        stdnt: Stdnt
        tbook: Tbook
        fdbacks: [Fdback]
    }
`

