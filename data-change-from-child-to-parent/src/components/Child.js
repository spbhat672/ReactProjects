import React from 'react'

const Child = ({ onInputChange, inputValue }) => {
    const handleInputChange = (event) => {
      const childInputValue = event.target.value;
      onInputChange(childInputValue);
    };
  
    return (
      <div>
        <input value={inputValue} onChange={handleInputChange} />
      </div>
    );
  };

export default Child