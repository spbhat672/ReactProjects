import React from 'react'
import { useNavigate,useLocation} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

     const { fromSpecificPage } = state || {};

  const handleSubmit=()=>{
    localStorage.setItem("auth", JSON.stringify({isLoggedIn:true}));
    
    if(fromSpecificPage){
        navigate("/");
    }else 
    navigate(-1);
  }

  return (
    <div>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login