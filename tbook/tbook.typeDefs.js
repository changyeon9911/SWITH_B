import { gql } from "apollo-server";

export default gql`
    type Tbook {
        id: Int!
        type: String!
        name: String!
        description: String!
        createdat: String!
    }
`

