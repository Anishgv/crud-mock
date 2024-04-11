import React from "react";
import Base from "../Base/Base";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const StudentProfile = ({studentsData}) => {
  const {id} = useParams()
  const student = studentsData[id]
  return (
    <Base
      title="Student Profile"
      description="Individual Student Detail"
    >
      <div>
        <h1>Student Profile</h1>
        <h2>Student Name : {student.name}</h2>
        <p>Batch : {student.batch} </p>
        <p>Gender : {student.gender} </p>
        <p>year of experience : {student.experience} </p>
        <p></p>
      </div>
    </Base>
  );
};

export default StudentProfile;