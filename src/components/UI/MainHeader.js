import styled from "styled-components";

const MainHeader = () => {
  return (
    <Header>
      <span>방명록</span>
      <ul>
        <li>방명록 리스트</li>
        <li>방명록 작성</li>
      </ul>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3rem;
  background-color: var(--header-color);
  padding: 1rem;
  color: #ffffff;

  ul {
    display: flex;
  }

  li:first-child {
    margin-right: 2rem;
  }

  li:active {
    color: var(--grey);
  }
`;

export default MainHeader;
