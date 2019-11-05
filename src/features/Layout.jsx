import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import classnames from 'classnames'
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
} from 'semantic-ui-react'
import mainLibraryIcon from '../mainLibraryIcon.svg'

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
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as={Link} to="/" header style={{ fontSize: '18px' }}>
              <Image size='mini' src={mainLibraryIcon} style={{ marginRight: '1.5em' }} />

              Library Mania
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/discover"
              className={classnames({ active: this.isActive('/discover') })}
            >
              Discover
            </Menu.Item>

            <Menu.Item as={Link} to="/saved" className={classnames({ active: this.isActive('/saved') })}>Saved</Menu.Item>

            <Dropdown item simple text='Categories'>
              <Dropdown.Menu>
                <Dropdown.Item>Favourites</Dropdown.Item>

                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Custom Categories</span>
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
          {/* <Header as='h1'>dummy content headear</Header> */}

          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default withRouter(Layout)
