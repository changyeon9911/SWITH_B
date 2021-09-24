import { gql } from "apollo-server";

export default gql`
    type Fdback {
        id: Int!
        class: Class!
        content: String!
    }
`

