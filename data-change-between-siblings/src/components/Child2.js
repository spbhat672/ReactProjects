import React from 'react'

const Child2 = (props) => {
    return (
      <div>
        <label>Child2:</label>
        <input type="text" onChange={props.handleChange} />
        <br />
        <label>Child1:</label>
        <span>{props.text}</span>
      </div>
    )
  }

export default Child2