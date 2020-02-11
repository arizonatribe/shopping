import styled from "styled-components"

export const Categories = styled.div`
  display: grid;
  grid-area: category-filter;
  grid-auto-flow: column;
  grid-column-gap: 1em;
`
export const CategoryFilterButton = styled.button`
  display: block;
  cursor: pointer;
  border: 1px solid gray;
  background-color: ${props => (props.isHighlighted ? "lightblue" : "lightgray")};
  color: black;
  margin: 0;
  outline: none;
  &:active {
    background: lightblue;
  }
`
