import React from "react";
import Base from "../Base/Base";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const NoPage = () => {
  const history = useHistory();
  return (
    <Base
      title="You lost your way"
      description="Click below link to navigate to Home page"
    >
      <Button variant="outlined" color="primary" size="large" onClick={()=>history.push("/")}>
        Home
      </Button>
    </Base>
  );
};

export default NoPage;
