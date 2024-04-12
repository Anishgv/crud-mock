import React, { useState, useEffect } from "react";
import Base from "../Base/Base";
import { Button, TextField } from "@mui/material";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { useFormik } from "formik";
import { studentValidationSchema } from "./AddStudents";

const EditStudent = ({ studentsData, setStudents }) => {
  const [editId, setEditId] = useState("");
  const history = useHistory();
  const { id } = useParams();
  const student = studentsData[id];

  // const [studName, setStudName] = useState("");
  // const [studBatch, setStudBatch] = useState("");
  // const [studGender, setStudGender] = useState("");
  // const [studExperience, setStudExperience] = useState("");

  const {values, handleChange,handleSubmit,handleBlur,errors,touched}= useFormik({
    initialValues : {
      name: student.name,
      batch:student.batch,
      gender: student.gender,
      experience: student.experience, 
    },
    validationSchema : studentValidationSchema,
    onSubmit : (editedStudent) =>{
      setEditId(student.id);
      console.log("submit triggered",editedStudent)
      updateStudentData(editedStudent);
    }
  })

  //initial things & mounting happening
  useEffect(() => {
    setEditId(student.id);
    // setStudName(student.name);
    // setStudBatch(student.batch);
    // setStudGender(student.gender);
    // setStudExperience(student.yearsOfExperience);
  }, []);

  const updateStudentData = async (editedStudent) => {
    //we need the updated object
    // const updateStudObj = {
    //   name: studName,
    //   batch: studBatch,
    //   gender: studGender,
    //   yearsOfExperience: studExperience,
    // };
   
    try {
      const response = await fetch (`https://students-data-delta.vercel.app/students/${editId}`,{
        method : "PUT",
        body : JSON.stringify(editedStudent),
        headers : {
          "Content-Type" : "application/json"
        },
      });
      const data = await response.json()
    if (data){
    //select & find the student
    const editStudentIndex = studentsData.findIndex(
      (stud) => stud.id === editId
    );
    
    //change the updated data in the specific array of data
    studentsData[editStudentIndex] = editedStudent;
    //sets the students data
    setStudents([...studentsData]);
    // setStudName("");
    // setStudBatch("");
    // setStudGender("");
    // setStudExperience("");
    history.push(`/details`);
    } 
    } catch (error) {
      console.log("error occured")
    }
   


  };
  return (
    <Base title="Edit Student details" description="Edit a Student detail here">
      <div className="container">
        <div className="input-secion">
        <form onSubmit={handleSubmit}> 
        <TextField
            fullWidth
            label="Enter the Name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            name="name"
            id="fullWidth"
            sx={{ m: 1 }}
          />
          {touched.name && errors.name ? <p style={{color:"red"}}>{errors.name} </p>: ""}
          <TextField
            fullWidth
            label="Enter the batch"
            onChange={handleChange}
            value={values.batch}
            onBlur={handleBlur}
            name="batch"
            id="fullWidth"
            sx={{ m: 1 }}
          />
         {touched.batch && errors.batch ?<p style={{color:"red"}}>{errors.batch} </p>  : ""}
          <TextField
            fullWidth
            label="Enter the gender"
            onChange={handleChange}
            value={values.gender}
            onBlur={handleBlur}
            name="gender"
            id="fullWidth"
            sx={{ m: 1 }}
          />
          {touched.gender && errors.gender ? <p style={{color:"red"}}>{errors.gender} </p> : ""}
          <TextField
            fullWidth
            label="Enter the year experience"
            onChange={handleChange}
            value={values.experience}
            onBlur={handleBlur}
            name="experience"
            id="fullWidth"
            sx={{ m: 1 }}
          />
          {touched.experience && errors.experience ? <p style={{color:"red"}}>{errors.experience} </p> : ""}


          <Button
            variant="contained"
            color="secondary"
             type="submit"
            sx={{ m: 1 }}
            // onClick={updateStudentData}
          >
            Update DATA
          </Button>
          </form>
        </div>
      </div>
    </Base>
  );
};

export default EditStudent;
