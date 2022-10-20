import styled from "styled-components";

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 500px;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 5px;

  background-color: var(--content-color);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export default Card;
