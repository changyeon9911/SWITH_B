import { gql } from "apollo-server";

export default gql`
    type CPcode {
        id: Int!
        code: String!
        used: Boolean!
        numclass: Int!
        createdat: String!
    }
`

