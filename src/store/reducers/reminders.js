import {
  CREATE_REMINDER,
  DELETE_REMINDER,
  FILTER_REMINDERS,
  UPDATE_REMINDER,
} from '../types';
import { filterReminders } from '../../utils';

const initialState = {
  reminder: {},
  reminders: [],
  filtered: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REMINDER:
      return {
        ...state,
        reminder: action.reminder,
        reminders: [...state.reminders, action.reminder],
      };
    case UPDATE_REMINDER:
      const updated = state.reminders.map((reminder) => {
        if (reminder.id === action.reminder.id) {
          return {
            ...reminder,
            isDone: true,
          };
        }
        return reminder;
      });
      return {
        ...state,
        reminder: action.reminder,
        reminders: updated,
        filtered: updated,
      };
    case DELETE_REMINDER:
      return {
        ...state,
        reminder: {},
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
