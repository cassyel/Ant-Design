import { Fragment } from 'react';
import { Content, Footer, Header, SideMenu } from './components';
import { GlobalStyle } from './styles';

import { App as AppContainer, Space } from 'antd';

export default function App() {
  return (
    <Fragment>

      <GlobalStyle />

      <AppContainer className='AppContainer'>
        <Header />

        <Space className='SpaceContainer'>
          <SideMenu />
          <Content />
        </Space>

        <Footer></Footer>
      </AppContainer>

    </Fragment>
  );
}
