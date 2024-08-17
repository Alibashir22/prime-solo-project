import React from 'react';

import { useSelector } from 'react-redux';
import Workout from './workout';
import { Link } from 'react-router-dom';
import store from '../../redux/store';

function UserPage() {
  const user = useSelector((store) => store.user);
  const workoutHistory=useSelector((store)=>store.workout)
  //store the workout history of the user
  
  return (
    <div className="container">
      <Link to="/create" className="create">Create Workout</Link>
      <h1>My Workout History</h1>
      <div className='cards'>{workoutHistory.map((workout) => (
        <Workout workout={workout} />
      ))}</div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
