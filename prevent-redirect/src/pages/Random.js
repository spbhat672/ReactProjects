import React from 'react'
import { useParams,useNavigate } from "react-router-dom";

const Random = () => {
    const navigate = useNavigate();
    const { parameters } = useParams();

  return (
    <div>Random
        <button onClick={() => {
              navigate("/");
            }}>Go to home</button>
        Parameter given : {parameters}
    </div>
  )
}

export default Random