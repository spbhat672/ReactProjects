import React, { useState, useEffect } from "react";
import { setStateVal } from "../actions/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function InputPage() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetState = () => {
    // Set the state in Redux
    dispatch(setStateVal(value));

    // Save the state to localStorage
    localStorage.setItem("reduxState", JSON.stringify({ value }));
  };

  return (
    <div>
      <h1>input page</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSetState}>Set state</button>
      <button onClick={() => navigate("/output")}>Navigate to OP</button>
    </div>
  );
}

export default InputPage;
