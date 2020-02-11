import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { MiniCartSummary, CircleBackdrop } from "./MiniCart.styles"

function MiniCart(props) {
  return (
    <MiniCartSummary>
      <CircleBackdrop>
        <Link to="/cart">
          <h1>{props.items.length}</h1>
        </Link>
      </CircleBackdrop>
    </MiniCartSummary>
  )
}

MiniCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MiniCart
