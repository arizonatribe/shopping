import styled from "styled-components"

export const MiniCartSummary = styled.div`
  display: grid;
  grid-area: mini-cart;
  justify-content: center;
  justify-items: center;
  &:after {
    color: darkslategray;
    font-size: 0.8em;
    content: "view your cart";
  }
`

export const CircleBackdrop = styled.div`
  display: block;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 3em;
  height: 3em;

  & a {
    background-color: darkgray;
    border-radius: 50%;
    color: white;
    display: block;
    text-decoration: none;
  }
`
