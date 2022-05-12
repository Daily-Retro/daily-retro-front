import styled from 'styled-components';
import { useState } from 'react';
import CenterTemplate from '../components/template/CenterTemplate';
import TitleModal from '../components/question/TitleModal';
import PlusMinus from '../components/question/PlusMinus';
import QuestionArea from '../components/question/QuestionArea';

function QuestionPage() {
  const [question, setQuestion] = useState<number>(3);

  return (
    <CenterTemplate>
      <Question>
        <PlusMinus num={question} setNum={setQuestion} />
        <TitleModal />
        <QuestionArea que={question} />
      </Question>
    </CenterTemplate>
  );
}

export default QuestionPage;

const Question = styled.div`
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 0 50px 50px;
  border-radius: 20px;
  position: relative;
`;
