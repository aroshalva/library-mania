import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
} from 'semantic-ui-react'
import mainLibraryIcon from '../mainLibraryIcon.svg'

const MenuComponent = () => (
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
)

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.isActive = this.isActive.bind(this)
  }

  isActive(path) {
    return path === this.props.location.pathname
  }

  render() {
    return (
      <div>
        <MenuComponent />

        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>dummy content headear</Header>

          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default withRouter(Layout)
