import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7807Saga from '../features/EmailAuth7807/redux/sagas';
import CalendarView7806Saga from '../features/CalendarView7806/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7807Saga,
CalendarView7806Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}