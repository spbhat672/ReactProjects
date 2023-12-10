import React,{useState} from 'react'
import Todo from './Todo';

const Home2 = () => {
    const [todoList,setTodoList] = useState([]);
    const [inpt,setInpt] = useState("");

    const handleAdd =()=>{
        console.log(inpt.length);
        if(inpt && inpt.length>0){
            let todoId = Math.floor(Math.random()*10);
            let todo = {id:todoId,val:inpt}
            let updatedTodo = [...todoList,todo];
            console.log(todo);
            setTodoList(updatedTodo);
            setInpt("");
        }
    }

    const handleDelete =(todoId)=>{
      let updatedTodo = todoList.filter((key)=> key.id !== todoId);
      setTodoList(updatedTodo);
    }

  return (
    <div>
        <h2>Todo List</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
            <input type='text' value={inpt} onChange={(e)=>setInpt(e.target.value)}></input>
            <button onClick={()=>handleAdd()}>Add Todo</button>
        </div>
        <div>
            {todoList.map((item)=> (<Todo val={item.val} id={item.id} handleDelete={handleDelete} key={item.id}></Todo>))}
        </div>
    </div>
  )
}

export default Home2