import React, { Component } from "react";

export class Students extends Component {
  render() {
    return (
      <div>
        <h3>Students</h3>
        <div className="list">
          {this.props.students.map(x => {
            x.name = x.name + " is awesome!";
            return <div key={x.name}>{x.name}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Students;
