import React from "react"
import PropTypes from "prop-types"
import { Categories, CategoryFilterButton } from "./CategoryFilter.styles"

function CategoryFilter(props) {
  return (
    <Categories>
      {props.categories.map(cat => (
        <CategoryFilterButton
          key={cat}
          isHighlighted={props.currentCategory === cat}
          onClick={() => props.selectCategory(cat)}
        >
          {cat}
        </CategoryFilterButton>
      ))}
    </Categories>
  )
}

CategoryFilter.propTypes = {
  currentCategory: PropTypes.string,
  selectCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CategoryFilter
