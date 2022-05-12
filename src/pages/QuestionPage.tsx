import styled from 'styled-components';
import { avatar } from '../constants/img';
import { useState } from 'react';
import {
  BsFillPatchQuestionFill,
  BsBookmarkPlusFill,
  BsBookmarkXFill,
} from 'react-icons/bs';
import Modal from '../components/common/Modal';
import CenterTemplate from '../components/template/CenterTemplate';
import Button from '../components/common/Button';

function QuestionPage() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [question, setQuestion] = useState<number>(3);

  return (
    <CenterTemplate>
      <div>
        <Avatar />
        <TitleArea>
          <p>질문 리스트</p>
          <InfoIcon onClick={() => setIsModalVisible(true)} />
        </TitleArea>
        <Modal
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
        >
          <Description>
            <li>질문 리스트는 매일 매일 나에게 물어보는 질문 리스트 입니다.</li>
            <li>예를 들어 아래와 같이 작성하면 됩니다!</li>
            <li>1. 오늘은 무엇을 먹었나요?</li>
            <li>2. 오늘은 운동을 했었나요?</li>
            <li>3. 오늘은 공부를 했었나요?</li>
          </Description>
        </Modal>
        <QuestionArea>
          <PlusMinusArea>
            <BsBookmarkPlusFill onClick={() => setQuestion(question + 1)} />
            <BsBookmarkXFill
              onClick={() => {
                if (question > 3) {
                  setQuestion(question - 1);
                }
              }}
            />
          </PlusMinusArea>
          <ListArea>
            {Array.from({ length: question }).map((_, index) => (
              <List key={index}>
                <Input />
              </List>
            ))}
          </ListArea>
          <ButtonArea>
            <Button primary="primary">저장</Button>
            <Button>취소</Button>
          </ButtonArea>
        </QuestionArea>
      </div>
    </CenterTemplate>
  );
}

export default QuestionPage;

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${avatar});
  background-size: cover;
  margin: 0 auto;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  width: 100%;
  p {
    font-size: 30px;
  }
`;

const InfoIcon = styled(BsFillPatchQuestionFill)`
  height: 40px;
  color: #8b8b8b;
  &:hover {
    color: #5d5d5d;
  }
`;

const Description = styled.ul`
  line-height: 3em;
  list-style: none;
`;

const QuestionArea = styled.div`
  min-height: 40vh;
`;

const PlusMinusArea = styled.div`
  display: flex;
  color: #216e39;
  font-size: 35px;
  svg {
    &:hover {
      color: #309952;
    }
  }
`;

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

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
`;
