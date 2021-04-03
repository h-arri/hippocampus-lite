import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import store from '../store';
import './ant-styles.css';
import Hippo from '../../assets/hippo.svg';
import { Col, Layout, Row, Typography } from 'antd';
import Icon from '@ant-design/icons';
import styled, { ThemeProvider } from 'styled-components';

const AppLayout = styled(Layout)`
  color: ${(props) => props.theme.independence};
  background: ${(props) => props.theme.lightCyan};
`;

const AppHeader = styled(Layout.Header)`
  display: flex;
  justify-content: center;
  height: 15vw;
  background-color: ${(props) => props.theme.shinyShamrock};
`;

const HeaderRow = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    text-align: left;
    color: ${(props) => props.theme.lightCyan};
    letter-spacing: 1.5vw;
    user-select: none;
    font-size: 3vw;
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
`;

const theme = {
  gainsboro: '#DCE1DE',
  manatee: '#9A97A2',
  tartOrange: '#FF4D4F',
  eltonBlue: '#9CC5A1',
  lightCyan: '#E6FCF7',
  turquoise: '#ccf8ef',
  shinyShamrock: '#49A078',
  jungleGreen: '#00B28C',
  skobeloff: '#216869',
  independence: '#565264',
  brunswickGreen: '#344E41',
  darkJungleGreen: '#1F2421',
  darkLiver: '#4d4c51',
  purple: {
    blueBell: '#BDB3D8',
    amethyst: '#9B8FBF',
    middleBluePurple: '#796AA8',
    cyberGrape: '#453572',
    russianViolet: '#2A1E4F',
  },
};

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <AppHeader>
            <HeaderRow>
              <Col span={2} offset={2}>
                <FloatingHippo component={Hippo} />
              </Col>
              <TitleCol span={18} offset={1}>
                <Typography.Title>Hippocampus</Typography.Title>
              </TitleCol>
            </HeaderRow>
          </AppHeader>
          <Dashboard />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
