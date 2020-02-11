import React, { useState } from "react"
import PropTypes from "prop-types"
import useLocalStorage from "react-use-localstorage"

import MiniCart from "./MiniCart"
import CategoryFilter from "./CategoryFilter"
import SortByPrice from "./SortByPrice"
import {
  ItemName,
  ItemAmount,
  ItemCategory,
  InventoryPage,
  InventoryGrid,
  InventoryItem,
  InventoryCount
} from "./Inventory.styles"


function Inventory(props) {
  const [currentCategory, setCategory] = useState("")
  const [currentSort, sortBy] = useState("")
  const [inventoryItems = "", setItem] = useLocalStorage("cart", "")
  const itemList = inventoryItems.split(",").filter(Boolean)

  function selectCategory(category) {
    return currentCategory === category
      ? setCategory("")
      : setCategory(category)
  }
  function sortByPrice(direction) {
    return currentSort === direction
      ? sortBy("")
      : sortBy(direction)
  }
  function addToCart(item) {
    return setItem(
      itemList.includes(`${item}`)
        ? itemList.filter(i => i !== `${item}`).join(",")
        : [...itemList, item].filter(Boolean).join(",")
    )
  }

  return (
    <InventoryPage>
      <h1>Buy a few things for yourself!</h1>
      <MiniCart items={itemList} />
      <CategoryFilter
        categories={props.categories}
        selectCategory={selectCategory}
        currentCategory={currentCategory}
      />
      <InventoryGrid>
        {props.items
          .filter(i => i.inventory && (!currentCategory || i.category === currentCategory))
          .sort((prev, curr) => {
            if (!currentSort || prev.price === curr.price) {
              return 0
            } else if (
              (currentSort === "ASC" && prev.price < curr.price)
              || (currentSort === "DESC" && prev.price > curr.price)
            ) {
              return -1
            }
            return 1
          })
          .map(i => (
            <InventoryItem key={i.id} onClick={() => addToCart(i.id)} id={i.id}>
              <ItemName>{i.name}</ItemName>
              <ItemAmount>{i.price}</ItemAmount>
              <InventoryCount>{i.inventory}</InventoryCount>
              <ItemCategory>{i.category}</ItemCategory>
            </InventoryItem>
          ))
        }
      </InventoryGrid>
      <SortByPrice sortBy={sortByPrice} />
    </InventoryPage>
  )
}

Inventory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    inventory: PropTypes.number
  })).isRequired
}

export default Inventory
