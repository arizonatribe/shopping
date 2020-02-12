import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"
import {
  Tax,
  Total,
  Subtotal,
  ItemName,
  CartTitle,
  CartItem,
  CartItems,
  RemoveButton,
  ShoppingCart,
  AmountSummary
} from "./Cart.styles"
import { ItemAmount } from "./Inventory.styles"

const TAX_PCT = 0.15

function Cart(props) {
  const [inventoryItems = "", setItems] = useLocalStorage("cart", "")
  const itemList = inventoryItems.split(",").filter(Boolean)

  const subtotal = props.items
    .filter(i => itemList.includes(`${i.id}`))
    .reduce((a, b) => a + b.price, 0)
  const tax = props.items
    .filter(i => i.category.toLowerCase() !== "service" && itemList.includes(`${i.id}`))
    .reduce((a, b) => a + (b.price * TAX_PCT), 0)

  function removeItem(item) {
    return setItems(itemList.filter(i => i !== `${item}`).join(","))
  }

  return (
    <ShoppingCart>
      <CartTitle />
      <CartItems>
        {itemList.map(i => (
          <CartItem key={i}>
            <RemoveButton onClick={() => removeItem(i)} />
            <ItemName>{(props.items.find(a => a.id === +i) || {}).name}</ItemName>
            <ItemAmount>{(props.items.find(a => a.id === +i) || {}).price}</ItemAmount>
          </CartItem>
        ))}
      </CartItems>
      <AmountSummary>
        <Subtotal>{subtotal}</Subtotal>
        <Tax>{tax}</Tax>
        <Total>{subtotal + tax}</Total>
        <Link to="/home">Go Back</Link>
      </AmountSummary>
    </ShoppingCart>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    inventory: PropTypes.number
  })).isRequired
}

export default Cart
