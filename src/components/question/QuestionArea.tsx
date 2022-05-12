import styled from 'styled-components';
import SaveCancel from './SaveCancel';

function QuestionArea({ que }: { que: number }) {
  return (
    <>
      <ListArea>
        {Array.from({ length: que }).map((_, index) => (
          <List key={index}>
            <Input />
          </List>
        ))}
      </ListArea>
      <SaveCancel />
    </>
  );
}

export default QuestionArea;

const ListArea = styled.ol`
  width: 200px;
  min-height: 30vh;
  padding: 20px 0;
  margin: 0 auto;
`;

const List = styled.li`
  border-bottom: 1px solid gray;
  margin: 20px 0;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 14px;
`;
