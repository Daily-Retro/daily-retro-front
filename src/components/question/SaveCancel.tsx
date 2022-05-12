import Button from '../common/Button';
import styled from 'styled-components';

function SaveCancel() {
  return (
    <ButtonArea>
      <Button primary="primary">저장</Button>
      <Button>취소</Button>
    </ButtonArea>
  );
}

export default SaveCancel;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
`;
