import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  StyledButton,
  StyledCard,
  StyledPopconfirm,
} from './StyledAntComponents';
import {
  deleteReminder,
  updateReminder,
} from '../store/actions/reminders';

const DeleteButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.gainsboro};
  border: none;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.tartOrange};
    color: ${(props) => props.theme.gainsboro};
  }
`;

const DoneButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.lightCyan};
  color: ${(props) => props.theme.skobeloff};

  &:hover,
  &:focus {
    border: solid 1px ${(props) => props.theme.shinyShamrock};
    background-color: ${(props) => props.theme.shinyShamrock};
    color: ${(props) => props.theme.lightCyan};
  }
`;

const ReminderCard = styled(StyledCard)`
  width: 80%;
  background-color: ${(props) =>
    reminder.isDone ? props.theme.darkLiver : ''};
  cursor: ${reminder.isDone ? 'not-allowed' : ''};

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: ${(props) =>
      `0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px ${props.theme.independence}`};
  }

  > div,
  .ant-card-meta-title {
    color: ${(props) => props.theme.lightCyan};
  }

  > div.ant-card-cover {
    height: 125px;
  }

  > div > div.ant-card-head-wrapper {
    float: right;
  }

  .counter {
    display: flex;
    justify-content: flex-end;
  }
`;

const Reminder = (props) => {
  const { reminder } = props;
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(updateReminder(reminder.id));
  };

  const handleDelete = () => {
    dispatch(deleteReminder(reminder.id));
  };

  return (
    <>
      <ReminderCard
        title={moment(
          new Date(reminder.remindAt).getTime()
        ).fromNow()}
        className={reminder.isDone ? 'done' : 'reminder'}
        actions={[
          <StyledPopconfirm
            title="Are you sure?"
            okText="Yes"
            cancelText="No"
            cancelButtonProps={{ danger: true }}
            onConfirm={handleDelete}
            disabled={reminder.isDone}
          >
            <DeleteButton danger disabled={reminder.isDone}>
              Delete
            </DeleteButton>
          </StyledPopconfirm>,
          <DoneButton onClick={handleDone} disabled={reminder.isDone}>
            Done
          </DoneButton>,
        ]}
        hoverable
        cover={reminder.description}
      >
        <ReminderCard.Meta title={reminder.extra} />
      </ReminderCard>
    </>
  );
};

export default Reminder;
