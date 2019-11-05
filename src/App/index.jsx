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

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header style={{ fontSize: '18px' }}>
          <Image size='mini' src={mainLibraryIcon} style={{ marginRight: '1.5em' }} />

          Library Mania
        </Menu.Item>

        <Menu.Item as='a'>Discover</Menu.Item>

        <Menu.Item as='a'>Saved</Menu.Item>

        <Dropdown item simple text='Categories'>
          <Dropdown.Menu>
            <Dropdown.Item>Favourites</Dropdown.Item>

            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>My Categories</span>
              <Dropdown.Menu>
                <Dropdown.Item>Dummy Category 1</Dropdown.Item>
                <Dropdown.Item>Dummy Category 1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>

            <Dropdown.Item>Manage Categories</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>dummy content headear</Header>
    </Container>
  </div>
)

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
