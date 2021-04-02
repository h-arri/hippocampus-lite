import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import store from '../store';
import './ant-styles.css';
import Hippo from '../../assets/hippo.svg';
import { Col, Row, Typography } from 'antd';
import Icon from '@ant-design/icons';
import styled from 'styled-components';

const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
  background-color: #237673;
`;

const TitleCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    text-align: left;
    color: #e1ffff;
    letter-spacing: 1.5vw;
    user-select: none;
    font-size: 2.5em;
  }
`;

const FloatingHippo = styled(Icon)`
  display: flex;
  justify-content: center;
  margin: 0 4%;
  font-size: 95px !important;
  z-index: 1;
  animation: float 3s ease-out infinite;

  @keyframes float {
    50% {
      transform: translate(0, 20px);
    }
  }
`

export const App = () => {
  return (
    <Provider store={store}>
      <PageHeader>
        <Row style={{ width: '100%' }}>
          <Col span={2} offset={2}>
            <FloatingHippo component={Hippo} className="hippo" />
          </Col>
          <TitleCol span={18} offset={1}>
            <Typography.Title>Hippocampus</Typography.Title>
          </TitleCol>
        </Row>
      </PageHeader>
      <Dashboard />
    </Provider>
  );
};

export default App;
