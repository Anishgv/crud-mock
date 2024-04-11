import Base from "../Base/Base";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import * as yup from 'yup';
import { useFormik } from "formik";

//schema validations 

export const studentValidationSchema = yup.object({
    name: yup.string().required("please fill the name"),
    batch: yup.string().required("please fill the batch name").min(5,"please enter valid batch name"),
    gender: yup.string().required("please enter the gender"),
    experience: yup.string().required("please enter your experience"),
})

const AddStudents = ({ studentsData, setStudents }) => {

  const {values, handleChange,handleSubmit,handleBlur,errors,touched}= useFormik({
    initialValues : {
      name: "",
      batch: "",
      gender: "",
      experience: "", 
    },
    validationSchema : studentValidationSchema,
    onSubmit : (newStudent) =>{
      console.log("submit triggered",newStudent)
      addNewStudent(newStudent);
    }
  })

  // const [values, setValues] = useState({
  //   name: "",
  //   batch: "",
  //   gender: "",
  //   experience: "",
  // });

  // const { id, name, batch, gender, experience } = values;


  const history = useHistory();

  //Single hand change event

  // const handleChange = (name) => (event) => {
  //   const value = event.target.value;
  //   setValues({ ...values, [name]: value });
  // };

  // create a new data
  const addNewStudent = async (newStudent) => {
    // event.preventDefault();
    try {
      // const newStudent = {
      //   name,
      //   batch,
      //   gender,
      //   yearsOfExperience: experience,
      // };

      const response = await fetch ("https://students-data-delta.vercel.app/students",{
        method : "POST",
        body : JSON.stringify(newStudent),
        headers : {
          "Content-Type" : "application/json"
        },
      });
      const data = await response.json()
      console.log(data)

      setStudents([...studentsData, data]);
      // setValues({
      //   ...values,
      //   name: "",
      //   batch: "",
      //   gender: "",
      //   experience: "",
      // });
      history.push(`/details`);
    } catch (error) {
      console.log("error occured")
    }

   
  };

  return (
    <Base title="Add a new student" description="You can add new students here">
      <div>
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
            type="submit"
            color="success"
            sx={{ m: 1 }}
            // onClick={addNewStudent}
          >
            ADD DATA
          </Button>
          </form>
        </div>
      </div>
    </Base>
  );
};

export default AddStudents;
