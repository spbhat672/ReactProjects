import React from 'react'

const Todo = ({val,id,handleDelete}) => {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <div>{val}</div>
        <div><button onClick={()=>handleDelete(id)}>Delete</button></div>
    </div>
  )
}

export default Todo