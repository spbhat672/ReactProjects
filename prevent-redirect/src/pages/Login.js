import React from 'react'
import { useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  const handleSubmit=()=>{
    localStorage.setItem("auth", JSON.stringify({isLoggedIn:true}));
    const urlParams = new URLSearchParams(window.location.search);
    const navigatePath=urlParams.get("navigate")
    if(navigatePath)
    navigate(navigatePath);
    else
    navigate("/");
  }

  return (
    <div>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login