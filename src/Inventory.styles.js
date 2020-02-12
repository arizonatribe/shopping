import React from "react"
import styled from "styled-components"

export const InventoryPage = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 10em 1fr 10em;
  grid-row-gap: 0.5em;
  grid-template-areas:
    ". header mini-cart"
    ". category-filter ."
    ". inventory-items ."
    ". sort .";

  & h1 {
    display: block;
    text-align: center;
    grid-area: header;
  }
`

export const InventoryGrid = styled.div`
  display: grid;
  grid-area: inventory-items;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.4em;
`

export const InventoryCount = styled.p`
  display: block;
  grid-area: inventory-count;
  &:before {
    content: "1 of ";
  }
`

export const InventoryItem = styled.div`
  display: grid;
  cursor: pointer;
  border: 1px solid gray;
  padding: 0.4em;
  justify-content: space-between;
  align-items: center;
  grid-template-areas:
    "item-name item-category"
    "inventory-count item-amount";

  &:hover {
    color: white;
    background-color: gray;
    border: 1px solid darkgray;
    transition-duration: 0.3s
  }
`

const Amount = styled.p`
  display: block;
  grid-area: item-amount;
`

export const ItemAmount = props => (
  <Amount>
    {typeof props.children === "number"
      ? Number(props.children).toLocaleString("en", { currency: "USD", style: "currency" })
      : props.children
    }
  </Amount>
)

export const ItemName = styled.h3`
  display: block;
  grid-area: item-name;
`

export const ItemCategory = styled.p`
  display: block;
  font-style: italic;
  text-align: right;
  grid-area: item-category;
  &:before {
    content: "("
  }
  &:after {
    content: ")"
  }
`
