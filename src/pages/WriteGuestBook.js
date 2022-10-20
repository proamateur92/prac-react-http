import Card from "../components/UI/Card";
import styled from "styled-components";

const WriteGuestBook = () => {
  return (
    <Wrap>
      <Card>
        <div>
          <label htmlFor="text">방명록</label>
          <input id="text" type={"text"} />
        </div>
        <div>
          <label htmlFor="author">작성자</label>
          <input type={"author"} />
        </div>
      </Card>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;

  input {
    margin-left: 1rem;
    padding: 0.5rem 0;
  }
`;

export default WriteGuestBook;
