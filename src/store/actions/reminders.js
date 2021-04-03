import {
  CREATE_REMINDER,
  DELETE_REMINDER,
  FILTER_REMINDERS,
  UPDATE_REMINDER,
} from '../types';

const createReminder = (reminder) => ({
  type: CREATE_REMINDER,
  reminder,
});

const updateReminder = (reminder) => ({
  type: UPDATE_REMINDER,
  reminder,
});

const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  id,
});

const filterReminders = (filter) => ({
  type: FILTER_REMINDERS,
  filter,
});

export {
  createReminder,
  updateReminder,
  deleteReminder,
  filterReminders,
};
