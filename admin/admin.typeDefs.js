import { gql } from "apollo-server";

export default gql`
    type Admin {
        id: Int!
        email: String!
        username: String!
        password: String!
        createdat: String!
    }
`

