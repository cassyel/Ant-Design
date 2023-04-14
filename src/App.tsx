import { Fragment } from 'react';
import { Content, Footer, Header, SideMenu } from './components';
import { GlobalStyle } from './styles';

import { App as AppContainer, Space } from 'antd';

export default function Appt() {
  return (
    <Fragment>

      <GlobalStyle />

      <AppContainer style={{ height: '100vh', width: '100vw' }}>
        <Header />

        <Space>
          <SideMenu></SideMenu>
          <Content></Content>
        </Space>

        <Footer></Footer>
      </AppContainer>

    </Fragment>
  );
}
