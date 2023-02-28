import React from 'react'

const Child1 = (props) => {
    return (
      <div>
        <label>Child1:</label>
        <input type="text" onChange={props.handleChange} />
        <br />
        <label>Child2:</label>
        <span>{props.text}</span>
      </div>
    )
  }

export default Child1