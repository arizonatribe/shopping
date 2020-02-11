import React from "react"
import styled from "styled-components"
import { ItemAmount } from "./Inventory.styles"

export const ShoppingCart = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1em;
  grid-template-areas:
    ". cart-title ."
    ". cart-items ."
    ". amount-summary .";
`

export const ItemName = styled.h3`
  font-weight: 500;
  font-size: 1em;
  grid-area: item-name;
`

export const CartTitle = styled.h2`
  display: block;
  grid-area: cart-title;
  text-align: center;
  &:after {
    content: "Your Cart:";
  }
`

export const CartItems = styled.div`
  display: grid;
  grid-area: cart-items;
  grid-gap: 1em;
`

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "item-name item-name"
    "item-amount remove-button";
  align-content: center;
  align-items: center;
  padding: 0.8em;
  border: 1px solid darkgray;
`

const LabeledAmount = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;

  & * {
    margin: 0;
    text-align: right;
    display: block;
  }
  & h3 {
    text-align: left;
  }
`

export const AmountSummary = styled.div`
  display: grid;
  text-align: center;
  grid-area: amount-summary;
`

export const Tax = props => (
  <LabeledAmount>
    <h3>Tax:</h3>
    <ItemAmount {...props} />
  </LabeledAmount>
)

export const Subtotal = props => (
  <LabeledAmount>
    <h3>Subtotal:</h3>
    <ItemAmount {...props} />
  </LabeledAmount>
)

export const Total = props => (
  <LabeledAmount>
    <h3>Total:</h3>
    <ItemAmount {...props} />
  </LabeledAmount>
)

export const RemoveButton = styled.button`
  display: block;
  cursor: pointer;
  grid-area: remove-button;
  border-radius: 1em;
  color: darkgray;
  background-color: white;
  border: 1px solid gray;
  padding: 0.5em;

  &:after {
    content: "remove";
  }

  &:hover {
    color: white;
    background-color: darkgray;
  }
`
