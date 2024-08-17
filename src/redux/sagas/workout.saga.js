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
function* editWorkout(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    
    const response = yield axios.put('/api/workout'+action.payload.id,action.payload, config);

    
    yield put({ type: 'FETCH_WORKOUT' });
  } catch (error) {
    console.log(' request failed', error);
  }
}
function* deleteWorkout(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    
    const response = yield axios.delete('/api/workout'+action.payload.id,config);

    
    yield put({ type: 'FETCH_WORKOUT' });
  } catch (error) {
    console.log(' request failed', error);
  }
}

function* workoutSaga() {
  yield takeLatest('FETCH_WORKOUT', fetchWorkoutHistory);
  yield takeLatest('CREATE_WORKOUT', createNewWorkout);
  yield takeLatest('EDIT_WORKOUT', editWorkout);
  yield takeLatest('DELETE_WORKOUT', deleteWorkout);
}

export default workoutSaga;
