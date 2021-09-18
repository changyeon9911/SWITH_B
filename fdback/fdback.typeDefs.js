import { gql } from "apollo-server";

export default gql`
    type FdBack {
        id: Int!
        class: Class!
        content: String!
    }
`

