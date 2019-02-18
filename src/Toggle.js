import React from 'react'

export default function Toggle(props) {
  return (
    <div>
      <h4>Toggle</h4>
      Toggle value is {props.value ? 'true' : 'false'}
      {' '}
      <button onClick={props.onToggle}>Toggle</button>
    </div>
  )
}
