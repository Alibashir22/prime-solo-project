import React from 'react';

import { useSelector } from 'react-redux';
import Workout from './workout';
import { Link } from 'react-router-dom';

function UserPage() {
  const user = useSelector((store) => store.user);
  //store the workout history of the user
  const sampleworkouts = [
    {
      workout_id: 1,
      workout_date: "2024-08-10",
      notes: "this is my history page",
      exercises: "Push-up, Squat"
    },
    {
      workout_id: 2,
      workout_date: "2024-08-10",
      notes: "this is my history page",
      exercises: "Push-up, Squat"
    },
    {
      workout_id: 3,
      workout_date: "2024-08-10",
      notes: "this is my history page",
      exercises: "Push-up, Squat"
    }
  ]
  return (
    <div className="container">
      <Link to="/create" className="create">Create Workout</Link>
      <h1>My Workout History</h1>
      <div className='cards'>{sampleworkouts.map((workout) => (
        <Workout workout={workout} />
      ))}</div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
