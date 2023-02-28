import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }
  
    return (
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <Child inputValue={inputValue} />
      </div>
    )
  }

export default Parent