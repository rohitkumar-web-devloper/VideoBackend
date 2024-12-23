import { gql } from "graphql-tag";
const categoriesDef = gql`
  type Category {
    id: ID
    name: String
    createdById: Int
    createdByName:String
    createdAt: String
    updatedAt: String
    message: String
    success:Boolean
  }
  type Query {
    categories: [Category]
    category(id: ID!): Category
  }

  type Mutation {
    createCategories(name: String ): Category
    updateCategories(id: ID!, name: String): Category
    deleteCategories(id: ID!): Category
  }
`;
export default categoriesDef;
