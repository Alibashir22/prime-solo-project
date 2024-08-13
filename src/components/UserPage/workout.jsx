import Button from '@mui/material/Button';
function Workout({workout}){
    return <div>
        <h2>{`${new Date(workout.workout_date).toDateString()} workout session`}</h2>
        <h3>Exercises</h3>
        <ul>
            {workout.exercises.split(",").map((exercise)=>(
                <li>{exercise.trim()}</li>
            ))}
        </ul>
        <h3>My Notes</h3>
        <p>{workout.notes}</p>
        <div>
        <Button variant="outlined">Edit</Button>
        <Button variant="outlined">Delete</Button>
        </div>
        <div><Button variant="outlined">Reuse</Button></div>
        
    </div>
}

export default Workout