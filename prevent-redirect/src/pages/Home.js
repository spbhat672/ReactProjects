import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const randomParam = "hello_santosh_bhat"

    const handleClick = ()=>{
        navigate(`/random/${randomParam}`);
    }

  return (
    <div>
        Home
     <button onClick={() => {
              localStorage.removeItem("auth");
              navigate("/login");
            }}>Logout</button>
            <button onClick={handleClick}>Go to random page</button>
    </div>    
  )
}

export default Home