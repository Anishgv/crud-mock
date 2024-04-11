import React, { useState } from "react";
import Base from '../Base/Base';
import { Button,  FormControl, FormLabel, Input, Link, Typography } from "@mui/material";
import {AuthData} from '../Data/AuthData'
import { useHistory } from "react-router-dom/cjs/react-router-dom";




const AuthPage = () => {
  const [auth,setAuth] = useState(AuthData)
  const [loginName,setLoginName] =useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false);
  const history = useHistory();

  const loginUser = ()=>{
    if(loginName=== auth[0].userName && password === auth[0].password){
      localStorage.setItem("user-name",loginName)
      setError(false)
      history.push("/details")
    }
    else{
      setError(true)
    }
  }
  return (
    <Base
      title="Login/Signup Page"
      description="Please Login or signup"
    >
    <div className="login-page">
 
       
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange={(e)=>setLoginName(e.target.value)}
              value ={loginName}
            />
          </FormControl> {" "}

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
              value ={password}
            />
          </FormControl>
          {error ? 
          <Typography>
            Invalid user name or password
          </Typography>
          : ""}

          <Button sx={{ mt: 1 /* margin top */ }} onClick={()=>loginUser()}>Log in</Button>
          
    </div>
  
    </Base>
  );
};

export default AuthPage;