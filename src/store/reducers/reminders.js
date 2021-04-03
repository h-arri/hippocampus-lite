import {
  CREATE_REMINDER,
  FILTER_REMINDERS,
  GET_REMINDERS,
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_SUCCESS,
  UPDATE_FILTERED,
} from '../types';
import { filterReminders, update } from '../../utils';

const initialState = {
  reminders: [
    // {
    //   id: 1234,
    //   createdAt: '2021-04-01 08:51:02',
    //   description: 'dasas',
    //   extra: 'aas',
    //   remindAt: '2021-04-01 08:50:58',
    //   isDone: false,
    // },
  ],
  filtered: [
    // {
    //   id: 1234,
    //   createdAt: '2021-04-01 08:51:02',
    //   description: 'dasas',
    //   extra: 'aas',
    //   remindAt: '2021-04-01 08:50:58',
    //   isDone: false,
    // },
  ],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.reminder],
      };
    case FILTER_REMINDERS:
      return {
        ...state,
        filtered: filterReminders(state.reminders, action.filter),
      };
    default:
      return state;
  }
};
