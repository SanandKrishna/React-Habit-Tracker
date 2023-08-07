import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../Redux/Features/habitSlice";

const Navbar = ({ name }) => {
  // calling the use dispatch hook 
  const dispatch=useDispatch();

  // change state according to time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);
  
  // function for adding habit 
  const handleSave=()=>{
    const habitName=document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    alert("Your habit has been added successfully");
    document.getElementById("habitName").value="";
  }

  return (
    <>
      <div className="navbar">
        <h3>
          {/* according to the current time it shows morning,afternoon, and night */}
          {hour <= 24
            ? "Good Morning! Rise and Shine"
            : hour <= 12
            ? "Good afternoon! Had your lunch?"
            : hour <= 17
            ? "Have a tea,but Beware over consumption is not good"
            : hour <= 22
            ? "Good night"
            : "A healthy mind needs a healthy sleep" }
        </h3>
        <div className="right-nav">
          <h5>{name}</h5>
          <button
            className="addHabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa"></i> Create a New Habit
          </button>
        </div>
      </div>

      {/* modal for adding habit form */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit?
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder= "habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;