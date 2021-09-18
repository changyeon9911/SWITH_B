import { gql } from "apollo-server";

export default gql`
    type TBook {
        id: Int!
        type: String!
        name: String!
        description: String!
        createdat: String!
    }
`

