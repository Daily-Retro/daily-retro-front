import { useState } from 'react';
import Modal from '../common/Modal';
import styled from 'styled-components';
import { BsFillPatchQuestionFill } from 'react-icons/bs';

function TitleModal() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <>
      <TitleArea>
        <p>질문 리스트</p>
        <InfoIcon onClick={() => setIsModalVisible(true)} />
      </TitleArea>
      <Modal visible={isModalVisible} onCancel={() => setIsModalVisible(false)}>
        <Description>
          <li>질문 리스트는 매일 매일 나에게 물어보는 질문 리스트 입니다.</li>
          <li>예를 들어 아래와 같이 작성하면 됩니다!</li>
          <li>1. 오늘은 무엇을 먹었나요?</li>
          <li>2. 오늘은 운동을 했었나요?</li>
          <li>3. 오늘은 공부를 했었나요?</li>
        </Description>
      </Modal>
    </>
  );
}

export default TitleModal;

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
