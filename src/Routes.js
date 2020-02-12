import React from "react"
import {HashRouter, Route, Switch} from "react-router-dom"

import Cart from "./Cart"
import Inventory from "./Inventory"
import InventoryContext from "./InventoryProvider"

function unique(items) {
  return Array.from(new Set(items))
}

export default (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/">
        <InventoryContext.Consumer>
          {items => <Inventory categories={unique(items.map(i => i.category))} items={items} /> }
        </InventoryContext.Consumer>
      </Route>
      <Route exact path="/home">
        <InventoryContext.Consumer>
          {items => <Inventory categories={unique(items.map(i => i.category))} items={items} /> }
        </InventoryContext.Consumer>
      </Route>
      <Route exact path="/cart">
        <InventoryContext.Consumer>
          {items => <Cart items={items} /> }
        </InventoryContext.Consumer>
      </Route>
      <Route>
        <h1>Not Found</h1>
      </Route>
    </Switch>
  </HashRouter>
)
