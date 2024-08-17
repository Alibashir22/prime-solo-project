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

function* workoutSaga() {
  yield takeLatest('FETCH_WORKOUT', fetchWorkoutHistory);
}

export default workoutSaga;
