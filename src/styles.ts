import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    border: 0;
    margin: 0;
    padding: 0;
  }

  .AppContainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    .SpaceContainer {
      align-items: flex-start;
      display: flex;
      flex: 1;
      justify-content: flex-start;
    }
  }

`;
