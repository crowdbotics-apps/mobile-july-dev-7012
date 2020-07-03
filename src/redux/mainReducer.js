import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7807Reducer from '../features/EmailAuth7807/redux/reducers';
import CalendarView7806Reducer from '../features/CalendarView7806/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7807: EmailAuth7807Reducer,
CalendarView7806: CalendarView7806Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});