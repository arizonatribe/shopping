import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Sort = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-area: sort;
  grid-column-gap: 1em;

  & p {
    display: block;
    cursor: pointer;
  }
`

const SortButton = styled.button`
  display: block;
  border: 1px solid gray;
  cursor: pointer;
  background-color: ${props => (props.isHighlighted ? "lightblue" : "lightgray")};
  color: black;
  margin: 0;
  outline: none;
  &:active {
    background: lightblue;
  }
`

function SortByPrice(props) {
  return (
    <Sort>
      <SortButton isHighlighted={props.currentSort === "ASC"} onClick={() => props.sortBy("ASC")}>
        ASC
      </SortButton>
      <SortButton isHighlighted={props.currentSort === "DESC"} onClick={() => props.sortBy("DESC")}>
        DESC
      </SortButton>
    </Sort>
  )
}

SortByPrice.propTypes = {
  currentSort: PropTypes.string,
  sortBy: PropTypes.func.isRequired
}

export default SortByPrice
