import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Workout({ workout }) {
    const history=useHistory()
    const dispatch=useDispatch()
    //this is a component for showing one workout
    return <div className='workout'>
        <h2>{`${new Date(workout.workout_date).toDateString()} workout session`}</h2>
        <div><h3>Exercises</h3>
        <ul className='exercises'>
            {workout.exercises.split(",").map((exercise) => (
                <li>{exercise.trim()}</li>
            ))}
        </ul></div>
        <div><h3>My Notes</h3>
        <p>{workout.notes}</p></div>
        
        <div className='buttons'>
            <Button variant="outlined" color='info' onClick={()=>history.push('/create?edit='+workout.workout_id)}>Edit</Button>
            <Button variant="outlined" onClick={()=>history.push('/create?reuse='+workout.workout_id)}>Reuse</Button>
            <Button variant="outlined" color='error' onClick={()=>{
                if(window.confirm('are you sure you want to delete this workout?')){
                    dispatch({
                        type:"DELETE_WORKOUT",
                        payload:{
                            id:workout.workout_id
                        }
                    })
                }
            }}>Delete</Button>

        </div>


    </div>
}

export default Workout