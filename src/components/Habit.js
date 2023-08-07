import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../Redux/Features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({habit}) => {
  const today=new Date();
  const todayDay=today.getDay();
  let countDone=0;
  //loop for getting habitdone count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if(habit.weekLog[i].isDone===true){
      countDone++;
    }
  }
  
  // call use navigate hook from react-router-dom 
  const navigate=useNavigate();

  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // function call is made after clicking delete button on habit list
  const handleDelete=()=>{
    dispatch(deleteHabit(habit.id));
    alert("your habit has deleted successfully")
  }

  // this function call is used after click week button
  // this function used for set current habit id to localstorage and navigate to week page
  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week");
  }

  
  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay+1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Week
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;