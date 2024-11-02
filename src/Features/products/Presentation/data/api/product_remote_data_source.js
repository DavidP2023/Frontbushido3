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

export const GetProductQuery = gql`
query Query {
  getProducts {
    type
    stock
    precio
    name
    image
    id
    garantia
    features
    description
    brand
   
  }
}
`

export const GetProductByIdQuery = gql`
query Query($getProductByidId: ID!) {
  getProductByid(id: $getProductByidId) {
    type
    stock
    precio
    name
    image
    id
    garantia
    features
    description
    brand
  }
}
`
