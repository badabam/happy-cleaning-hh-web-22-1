import styled from 'styled-components';

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.header`
  padding: 12px 12px 0;
  text-align: center;
`;
