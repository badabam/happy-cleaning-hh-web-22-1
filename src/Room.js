import styled, { css } from 'styled-components';

export default function Room({
  text,
  description,
  isDescriptionVisible,
  isClean,
}) {
  const status = isClean ? 'clean' : 'dirty';

  return (
    <Wrapper>
      <Header>
        <h2 className="Room__heading">{text}</h2>
        <RoomStatus status={status}></RoomStatus>
      </Header>
      <p hidden={!isDescriptionVisible}>{description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 12px;
  border: 1px solid #ddd;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.1em;
  }
`;

const RoomStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: gray;

  /*
  The changes in styles are just to show that we can change 
  multiple properties via props and the 'css' object.
  */

  ${props =>
    props.status === 'dirty' &&
    css`
      background: crimson;
      border-radius: 20px;
    `}

  ${props =>
    props.status === 'clean' &&
    css`
      background: green;
      width: 30px;
      height: 30px;
    `}
`;
