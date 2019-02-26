import React, { Component } from 'react'
import axios from 'axios'

export class Cors extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      data: null,
      error: null
    }
  }

  componentDidMount() {
    const url = 'http://localhost:4000/myaccount'
    axios.get(url)
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error }))
      .then(() => this.setState({ isLoading: false }))
  }

  render() {
    const { isLoading, data, error } = this.state
    
    return (
      <div>
        {isLoading
          ? 'Loading...'
          : data
            ? <div>
                Account number: {data.accountNumber}
              </div>
            : <div>
                An unexpected error occurred: {error.message}
              </div>
        }
      </div>
    )
  }
}

export default Cors
