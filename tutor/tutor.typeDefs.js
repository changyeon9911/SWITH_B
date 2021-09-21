import { gql } from "apollo-server";

export default gql`
    type Tutor {
        id: Int!
        email: String!
        username: String!
        password: String!
        createdat: String!
        classes: [Class]
    }
`

