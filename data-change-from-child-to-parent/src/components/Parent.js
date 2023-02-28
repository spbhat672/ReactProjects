import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [inputValue, setInputValue] = useState("");
    
      const onChildInputChange = (childInputValue) => {
        setInputValue(childInputValue);
      };

    return (
      <div>
        <label>Input value in Child:</label>
        <Child onInputChange={onChildInputChange} inputValue={inputValue} />
        <p>Input value in Parent: {inputValue}</p>
      </div>
    );
  };

export default Parent