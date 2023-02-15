import React from 'react'
import { useParams,useNavigate } from "react-router-dom";

const Random2 = () => {
    const navigate = useNavigate();
    const { parameters } = useParams();
    console.log(parameters);
  return (
    <div>Random2
        <button onClick={() => {
              navigate("/");
            }}>Go to home</button>
        Parameter given : {parameters}
    </div>
  )
}

export default Random2