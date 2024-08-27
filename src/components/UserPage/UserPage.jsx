import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Workout from './workout';
import { Link } from 'react-router-dom';
import store from '../../redux/store';

function UserPage() {
  const user = useSelector((store) => store.user);
  const workoutHistory=useSelector((store)=>store.workout)
  const dispatch=useDispatch()
  //store the workout history of the user
  useEffect(()=>{
    dispatch({
      type:"FETCH_WORKOUT"
    })
    dispatch({
      type: "CLEAR_WORKOUT",
     
    });
  },[])
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
