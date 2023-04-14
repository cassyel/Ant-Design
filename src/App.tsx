import { Fragment } from 'react';
import { Content, Footer, Header, SideMenu } from './components';
import { GlobalStyle } from './styles';

import { App as AppContainer, Space } from 'antd';

export default function Appt() {
  return (
    <Fragment>

      <GlobalStyle />

      <AppContainer className='AppContainer'>
        <Header />

        <Space className='SpaceContainer'>
          <SideMenu></SideMenu>
          <Content></Content>
        </Space>

        <Footer></Footer>
      </AppContainer>

    </Fragment>
  );
}
