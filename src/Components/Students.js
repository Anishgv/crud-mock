import React, { useEffect } from "react";
import Base from '../Base/Base'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export function StudentDetails({studentsData,setStudents}) {
  
  const history = useHistory();
  useEffect(()=>{
    if(!localStorage.getItem("user-name")){
      history.replace("/register")
    }
},[]);


 

  // delete a data
  const deleteStudentData = async (studId) => {

    try {
      const response = await fetch (`https://students-data-delta.vercel.app/students/${studId}`,{
        method : "DELETE",
      });
      const data = await response.json()
      const selectedStudents = studentsData.filter((stud) => stud.id !== studId);
      setStudents(selectedStudents);
    } catch (error) {
      
    }
   
  };

 



  return (
    <Base
    title ="Batch details"
    description="All Student details">
    
    
 
    <div className="container">
     
      <div className="main-containers">
        {studentsData?.map((stud, id) => (
          <Card sx={{ maxWidth: 345 }} key={id} className="card" style={{backgroundColor: 'whitesmoke'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name : {stud.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Batch : {stud.batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender : {stud.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Years of Experience :{stud.experience} years
              </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
              <Button
                variant="contained"
                onClick={() => history.push(`/edit/${id}`)}
                color="success"
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => deleteStudentData(stud.id)}
                color="error"
              >
                Delete
              </Button>
              <Button
                variant="contained"
                onClick={() => history.push(`/student/${id}`)}
                style={{backgroundColor: 'grey'}}
              >
                View
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
    </Base>
  );
}
