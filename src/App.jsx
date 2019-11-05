import React from 'react'
import { Button } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Button>Click Here</Button>
        <Button primary>Primary</Button>
      </div>
    )
  }
}

export default App
