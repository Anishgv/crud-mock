import "./App.css";
import { StudentDetails } from "./Components/Students";
import Dashboard from "./Components/Dashboard";
import AuthPage from "./Components/AuthPage";
import EditStudent from "./Components/EditStudent";
import WelcomePage from "./Components/WelcomePage";
import AddStudents from "./Components/AddStudents";

import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import NoPage from "./Components/NoPage";
import StudentProfile from "./Components/StudentProfile";
import React, { useEffect, useState } from "react";

function App() {
  const [studentsData, setStudents] = useState([]);

  useEffect(() => {
   const getStudents = async ()=>{
    try {
      const response = await fetch ("https://students-data-delta.vercel.app/students",{
        method : "GET"
      })
      const data = await response.json();
      setStudents(data.data)
    } catch (error) {
      console.log("error occured", error)
    }
   }
   getStudents();
  }, []);


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <WelcomePage/>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/register">
          <AuthPage />
        </Route>
        <Route path="/details">
          <StudentDetails
            studentsData={studentsData}
            setStudents={setStudents}
          />
        </Route>
        <Route path="/students">
          <Redirect to="/details" />
        </Route>
        
        <Route path="/AddStudents">
          <AddStudents studentsData={studentsData} setStudents={setStudents} />
        </Route>
        <Route path="/student/:id">
          <StudentProfile studentsData={studentsData} />
        </Route>
        <Route path="/edit/:id">
          <EditStudent studentsData={studentsData} setStudents={setStudents} />
        </Route>
        <Route path="**">
          <NoPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

{
  /* <Base
     title ="Batch details"
     description="All Student details">
     <StudentDetails/>
     
     </Base>
     <Dashboard/>
     <AuthPage/> */
}
