import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import { useState } from "react";
import dayjs from "dayjs";
function CreateWorkout() {
    //this is a list off all exercises on the database
  const allexercises = [
    { value: "1", label: "Push-up" },
    { value: "2", label: "Squat" },
    { value: "3", label: "Deadlift" },
    { value: "4", label: "Bench Press" },
    { value: "5", label: "Pull-up" },
    { value: "6", label: "Lunge" },
    { value: "7", label: "Plank" },
    { value: "8", label: "Overhead Press" },
    { value: "9", label: "Burpee" },
    { value: "10", label: "Bent-over Row" },
    { value: "11", label: "Leg Press" },
    { value: "12", label: "Bicep Curl" },
    { value: "13", label: "Tricep Dip" },
    { value: "14", label: "Mountain Climber" },
    { value: "15", label: "Crunch" },
  ];
  //created local states for the workout inputs
  const [workoutdate,setworkoutdate]=useState(dayjs())
  const [notes,setnotes]=useState("")
  const [exercises,setexercises]=useState([])
  return (
    <div className="createpage">
      <h1>Create New Workout</h1>
      <form className="createform">
        <div className="group">
          <label htmlFor="date">Choose Workout Date</label>
          <DatePicker value={workoutdate} onChange={(e)=>{
            setworkoutdate(e)
          }} />

        </div>
        <div className="group exercises">
          <label htmlFor="exercises">Select Exercises</label>
          <Select
            value={exercises}
            onChange={setexercises}
            isMulti
            label="colors"
            options={allexercises}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="group notes">
          <label htmlFor="notes">Notes</label>
          <TextField value={notes} onChange={(e)=>setnotes(e.target.value)} label="Notes" variant="outlined" />
        </div>
        <button className="create submit">Create</button>
      </form>
    </div>
  );
}
export default CreateWorkout;
