import React, { Component } from 'react'

export class Students extends Component {
  render() {
    return (
      <div>
        <h3>Students</h3>
        <div className="list">
          {this.props.students.map(x => {
            return <div>{y.name}</div>
          })}
        </div>
      </div>
    )
  }
}

export default Students
