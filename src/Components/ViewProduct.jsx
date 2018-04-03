import React from 'react'
import { Button } from 'react-bootstrap'

class ViewProduct extends React.Component {

  handleDeleate = () => {
    this.props.onDelete(this.props.data.id)
  }

  render() {
    return (
      <div>
        <span>{this.props.data.product}</span>
        <span className='deleteButton' onClick={this.handleDeleate}>X</span>
      </div>
    )
  }
}

export default ViewProduct
