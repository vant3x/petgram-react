import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <ListOfCategories />
  </Fragment>
)
