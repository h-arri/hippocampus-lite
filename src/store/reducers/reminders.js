import {
  FILTER_REMINDERS,
  GET_REMINDERS,
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_SUCCESS,
  UPDATE_FILTERED,
} from '../types';
import { filterReminders, update } from '../../utils';
import moment from 'moment';

const initialState = {
  reminders: [
    {
      createdAt: '2021-04-01 08:51:02',
      description: 'dasas',
      extra: 'aas',
      remindAt: '2021-04-01 08:50:58',
      isDone: false,
    },
  ],
  filtered: [
    {
      createdAt: '2021-04-01 08:51:02',
      description: 'dasas',
      extra: 'aas',
      remindAt: '2021-04-01 08:50:58',
      isDone: false,
    },
  ],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_REMINDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        reminders: [...state.reminders, ...action.reminders],
        filtered: [...state.reminders, ...action.reminders],
      };
    case GET_REMINDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        reminders: [...state.reminders],
        filtered: [...state.reminders],
      };
    case FILTER_REMINDERS:
      return {
        ...state,
        filtered: filterReminders(state.reminders, action.filter),
      };
    case UPDATE_FILTERED:
      return {
        ...state,
        reminders: update(state.reminders, action.data),
        filtered: update(state.filtered, action.data),
      };
    default:
      return state;
  }
};
