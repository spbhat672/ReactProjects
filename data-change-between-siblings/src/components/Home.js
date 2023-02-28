import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2';

const Home = () => {
    const [child1Text, setChild1Text] = useState("");
    const [child2Text, setChild2Text] = useState("");
  
    const handleChild1Change = (event) => {
      setChild2Text(event.target.value);
    };
  
    const handleChild2Change = (event) => {
      setChild1Text(event.target.value);
    };
  
    return (
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          <Child1 text={child1Text} handleChange={handleChild1Change} />
          <Child2 text={child2Text} handleChange={handleChild2Change} />
      </div>
    )
  }

export default Home