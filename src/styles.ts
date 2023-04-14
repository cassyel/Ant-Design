import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    border: 0;
    margin: 0;
    padding: 0;
  }

  .AppContainer {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    .SpaceContainer {
      display: flex;
      flex: 1;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

`;
