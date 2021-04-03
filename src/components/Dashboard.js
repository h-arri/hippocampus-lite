import { Col, Divider, Layout, Row } from 'antd';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Create from './Create';
import RemindersList from './RemindersList';
import FilterBar from './FilterBar';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  filterReminders,
  getRemindersApi,
} from '../store/actions/reminders';

const DashboardLayout = styled(Layout)`
  padding: 2% 2%;
  margin: 0 2%;
  font-family: monospace;
  overflow: hidden;
  background: none;

  .ant-layout-content {
    margin: 4% 0;
    min-height: 50vh;
  }
`;

const DashboardHeader = styled(Layout.Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  height: 5rem;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const reminders = useSelector((state) => state.reminders.filtered);
  const loading = useSelector((state) => state.reminders.loading);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    (async function fetchReminders() {
      await dispatch(getRemindersApi());
      await dispatch(filterReminders(filter));
    })();
  }, []);

  return (
    <DashboardLayout>
      <DashboardHeader>
        <Col span={4}>
          <Create />
        </Col>
        <Col span={20}>
          <FilterBar filter={filter} />
        </Col>
      </DashboardHeader>
      <Divider />
      <DashboardLayout.Content>
        <RemindersList reminders={reminders} loading={loading} />
      </DashboardLayout.Content>
    </DashboardLayout>
  );
};

export default connect()(Dashboard);
