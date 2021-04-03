import { Col, Empty, Row, Skeleton } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Reminder from './Reminder';

const StyledRow = styled(Row)`
  justify-content: center;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledEmpty = styled(Empty)`
  .ant-empty-image > svg {
    height: 28vw;
  }

  .ant-empty-description {
    margin: 15%;
    font-size: 1.5em;
  }
`;

const RemindersList = ({ reminders, loading }) => {
  return (
    <Skeleton active loading={loading}>
      {reminders.length > 0 ? (
        <StyledRow gutter={[32, 48]}>
          {reminders.map((reminder) => (
            <StyledCol
              key={reminder.id}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <Reminder reminder={reminder} />
            </StyledCol>
          ))}
        </StyledRow>
      ) : (
        <StyledEmpty description="No reminders! :/" />
      )}
    </Skeleton>
  );
};

export default RemindersList;
