import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { useLocation } from "react-router-dom";
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
    { value: "16", label: "Russian Twist" },
    { value: "17", label: "Box Jump" },
    { value: "18", label: "Kettlebell Swing" },
    { value: "19", label: "Glute Bridge" },
    { value: "20", label: "Sit-up" },
    { value: "21", label: "Dumbbell Fly" },
    { value: "22", label: "Hip Thrust" },
    { value: "23", label: "Dumbbell Row" },
    { value: "24", label: "Jump Rope" },
    { value: "25", label: "Lat Pulldown" },
    { value: "26", label: "Wall Sit" },
    { value: "27", label: "Calf Raise" },
    { value: "28", label: "Romanian Deadlift" },
    { value: "29", label: "Farmers Walk" },
    { value: "30", label: "Reverse Crunch" },
    { value: "31", label: "High Knees" },
    { value: "32", label: "Skater Jump" },
    { value: "33", label: "Side Plank" },
    { value: "34", label: "Step-up" },
    { value: "35", label: "Hanging Leg Raise" },
  ];
  //created local states for the workout inputs
  const [workoutdate, setworkoutdate] = useState(dayjs());
  const [notes, setnotes] = useState("");
  const [exercises, setexercises] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  const oneworkout = useSelector((store) => store.oneworkout);
  console.log(oneworkout);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const editId = searchParams.get("edit");
  const reuseId = searchParams.get("reuse");

  useEffect(() => {
    if (editId) {
      dispatch({
        type: "FETCH_ONE_WORKOUT",
        payload: {
          id: editId,
        },
      });
    }
    if (reuseId) {
      dispatch({
        type: "FETCH_ONE_WORKOUT",
        payload: {
          id: reuseId,
        },
      });
    }
  }, [editId, reuseId]);

  const createWorkout = () => {
    dispatch({
      type: "CREATE_WORKOUT",
      payload: {
        notes: notes,
        workout_date: workoutdate.format("YYYY-MM-DD"),
        exercises_id: exercises.map((x) => x.value),
      },
    });
    history.push("/history");
  };
  const editWorkout = () => {
    dispatch({
      type: "EDIT_WORKOUT",
      payload: {
        notes: notes,
        workout_date: workoutdate.format("YYYY-MM-DD"),
        exercises_id: exercises.map((x) => x.value),
        id: editId,
      },
    });
    history.push("/history");
  };

  useEffect(() => {
    if (oneworkout) {
      setnotes(oneworkout?.notes);
      setworkoutdate(dayjs(oneworkout?.workout_date));
      setexercises(
        oneworkout?.exercises.split(",").map((i) => {
          return {
            value: allexercises.find((x) => x.label == i.trim()).value,
            label: i.trim(),
          };
        })
      );
    }
  }, [oneworkout]);

  return (
    <div className="createpage">
      <h1>Create New Workout</h1>
      <form
        className="createform"
        onSubmit={(e) => {
          e.preventDefault();
          if (editId) {
            editWorkout();
          } else {
            createWorkout();
          }
        }}
      >
        <div className="group">
          <label htmlFor="date">Choose Workout Date</label>
          <DatePicker
            value={workoutdate}
            onChange={(e) => {
              setworkoutdate(e);
            }}
          />
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
          <TextField
            value={notes}
            onChange={(e) => setnotes(e.target.value)}
            label="Notes"
            variant="outlined"
            autoComplete="on"
          />
        </div>
        <button className="create submit" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
export default CreateWorkout;
