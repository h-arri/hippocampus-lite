import { combineReducers } from 'redux';
import reminders from './reminders';
import filter from './filter';

export default combineReducers({
  reminders,
  filter,
});
