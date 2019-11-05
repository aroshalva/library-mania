import React from 'react'
import get from 'lodash/get'
import { Button, Popup } from 'semantic-ui-react'

class BookSnippet extends React.Component {
  render() {
    const { data } = this.props

    const imageLink = get(data, 'volumeInfo.imageLinks.thumbnail')

    return (
      <div>
        {imageLink && (
          <img
            src={imageLink}
            style={{
              float: 'left',
              marginRight: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '5px',
            }}
          />
        )}

        <span
          style={{
            marginTop: 0,
            marginBottom: '3px',
            fontSize: '1.5rem',
            lineHeight: '1.28571429em',
            fontWeight: 700,
          }}
        >
          {get(data, 'volumeInfo.title')}
        </span>

        <div style={{ padding: '8px' }}>
          <Popup
            trigger={
              <Button
                icon={{
                  name: 'heart',
                  color: 'pink',
                  size: 'large',
                }}
                circular
                basic
                style={{ marginRight: '7px' }}
              />
            }
            content="Add to Favourites."
            position="top left"
          />

          <Popup
            trigger={
              <Button
                icon={{
                  name: 'file alternate',
                  color: 'blue',
                  size: 'large',
                }}
                circular
                basic
              />
            }
            content="Read More."
            position="top left"
          />
        </div>


        <p>
          <b>{'description: '}</b>

          {get(data, 'volumeInfo.description')}
        </p>
      </div>
    )
  }
}

export default BookSnippet
