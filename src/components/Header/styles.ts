import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 15%);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 4px 20px 4px 12px;

  .icon {
    cursor: pointer;
    font-size: 24px;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
