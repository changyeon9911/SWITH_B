import { gql } from "apollo-server";

export default gql`
    type Stdnt {
        id: Int!
        email: String!
        username: String!
        password: String!
        cpnum: Int!
        createdat: String!
        classes: [Class]
        cpcodes: [CPCode]
    }
`

