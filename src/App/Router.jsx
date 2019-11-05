import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Layout from '../features/Layout'
import Discover from '../features/Discover'
import Favourites from '../features/Favourites'

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/discover" />}
          />

          <Route path="/discover" component={Discover} />

          <Route path="/favourites" component={Favourites} />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default Router
