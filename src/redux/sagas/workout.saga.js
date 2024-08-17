import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchWorkoutHistory() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    
    const response = yield axios.get('/api/workout', config);

    
    yield put({ type: 'SET_WORKOUT_HISTORY', payload: response.data });
  } catch (error) {
    console.log(' request failed', error);
  }
}
function* createNewWorkout(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    
    const response = yield axios.post('/api/workout',action.payload, config);

    
    yield put({ type: 'FETCH_WORKOUT' });
  } catch (error) {
    console.log(' request failed', error);
  }
}

function* workoutSaga() {
  yield takeLatest('FETCH_WORKOUT', fetchWorkoutHistory);
  yield takeLatest('CREATE_WORKOUT', createNewWorkout);
}

export default workoutSaga;
