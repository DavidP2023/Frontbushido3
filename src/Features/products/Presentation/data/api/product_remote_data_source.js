import { gql } from "@apollo/client";

export const CreateProductMutation = gql`
mutation CreateProduct($createProductInput: CreateProductInput!) {
  createProduct(createProductInput: $createProductInput) {
    brand
    description
    features
    garantia
    id
    image
    name
    precio
    stock
    type
   
  }
}
`