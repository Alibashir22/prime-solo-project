import Button from '@mui/material/Button';
function Workout({ workout }) {
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
            <Button variant="outlined" color='info'>Edit</Button>
            <Button variant="outlined">Reuse</Button>
            <Button variant="outlined" color='error'>Delete</Button>

        </div>


    </div>
}

export default Workout