import React from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Button } from "@mui/material";

 

const Dashboard = () => {
  const history = useHistory();
  return (
    <Base
      title="Welcome to students App"
      description="Please click below button to navigate"
    >
       <Button variant="contained" color="inherit" component="div" onClick={()=>history.push("/details")}>
              Student list
            </Button>
    </Base>
  );
};

export default Dashboard;
