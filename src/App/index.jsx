import React from 'react'
import { SemanticToastContainer } from 'react-semantic-toasts'
import 'react-semantic-toasts/styles/react-semantic-alert.css'
import Router from './Router'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import mainLibraryIcon from '../mainLibraryIcon.svg'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router />

        <SemanticToastContainer position="bottom-right" />
      </React.Fragment>
    )
  }
}

export default App
