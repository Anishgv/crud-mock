import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export function Base({ title, description, children }) {
  //react navigator
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("user-name");
    history.push("/dashboard");
  };
  return (
    <div className="main-component">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            variant="h6"
            color="inherit"
            component="div"
            onClick={() => history.push("/")}
          >
          <span className="icon">🏠︎</span>
          <span className="nav-name">Home</span>

          </Button>
          <Button
            variant="h6"
            color="inherit"
            component="div"
            onClick={() => history.push("/dashboard")}
          >
            <span className="icon">📋</span>
          <span className="nav-name">Dashboard</span>
            
          </Button>
          <Button
            variant="h6"
            color="inherit"
            component="div"
            onClick={() => history.push("/details")}
          >
            <span className="icon">📜</span>
          <span className="nav-name">Student list</span>
            
          </Button>
          <Button
            variant="h6"
            color="inherit"
            component="div"
            onClick={() => history.push("/AddStudents")}
          >
            <span className="icon">🔢</span>
          <span className="nav-name">Add Student</span>
            
          </Button>
          <Button
            variant="h6"
            color="inherit"
            component="div"
            onClick={() => history.push("/register")}
          >
            <span className="icon">🔐</span>
          <span className="nav-name">Login</span>
            
          </Button>
          <Button
            variant="h6"
            color="inherit"
            component="div"
            onClick={() => logOut()}
          >
            <span className="icon">🔑</span>
          <span className="nav-name">logout</span>
            
          </Button>
        </Toolbar>
      </AppBar>
      <header>
        <h1 className="heading">{title}</h1>
      </header>

      <main className="main-segment">
        <h1>{description}</h1>

        <div className="children-segment">{children}</div>
      </main>
    </div>
  );
}

export default Base;
