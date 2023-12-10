import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function OutputPage() {
  const location = useLocation();
  const stateVal = useSelector((state) => state.reducer.val);

  // Effect to remove localStorage value when navigating back or refreshing
  useEffect(() => {
    const currentPath = location.pathname;

    const handleBeforeUnload = () => {
      // Remove the value from localStorage when navigating back or refreshing
      debugger;
      if (currentPath === "/output") {
        localStorage.removeItem("reduxState");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location]);

  return (
    <div>
      <h1>set Value is {stateVal}</h1>
    </div>
  );
}

export default OutputPage;
