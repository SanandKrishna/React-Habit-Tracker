import React from "react";
import { Link } from "react-router-dom";
import DayView from "./Day";
import Navbar from "./NavBar";
import { useSelector } from "react-redux";

const Week = () => {
  // calling use selector hook for getting state from reducer
  let habitsState=useSelector((state)=>state.habits);
  
  // getting habit from habits state according to local storage 
  let habit={}
  for(let i=0;i<habitsState.length;i++){
    if(habitsState[i].id===Number(localStorage.getItem("id"))){
      habit=habitsState[i];
    }
  }
  
  return (
    <>
      <Navbar name="Week" />
      <h1 className="text-center" style={{textTransform:"capitalize"}}>{habit.name}</h1>
      <div className="days-container">
        {habit.weekLog.map((day,index)=><DayView day={day} key={index}/>)}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary" type="button">
          <Link to="/">Back to Details</Link>
        </button>
      </div>
    </>
  );
};

export default Week;