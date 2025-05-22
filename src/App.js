import React,{useEffect} from "react";
import Routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { logout } from '../src/redux/slice/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import {autoLogout}from "./autoLogout.js"

function App() {
const baseUrl=process.env.REACT_APP_BASE_URL || '/admin/' // why I am getting undified here ?

      
  const { auth_token } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

useEffect(() => {
  if (auth_token) {
    autoLogout(auth_token, () => {
      dispatch(logout());
    });
  }
}, [auth_token, dispatch]);
  return (

    <div className="App">
     <Toaster position="top-right" reverseOrder={true} />
     <Routes/>
    </div>
  );
}

export default App;
