import {
  CREATE_REMINDER,
  DELETE_REMINDER,
  FILTER_REMINDERS,
} from '../types';
import { filterReminders } from '../../utils';

const initialState = {
  reminders: [],
  filtered: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.reminder],
      };
    case DELETE_REMINDER:
      return {
        ...state,
        reminders: [
          ...state.reminders.filter(
            (reminder) => reminder.id !== action.id
          ),
        ],
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
