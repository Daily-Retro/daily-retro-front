import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PencilAnimation from '../components/home/PencilAnimation';
import CenterTemplate from '../components/template/CenterTemplate';

function HomePage() {
  const navigation = useNavigate();
  return (
    <CenterTemplate>
      <div>
        <h1>DAILY RETRO</h1>
        <Text>
          내가 정해놓은 질문에 맞춰 <br />
          회고하는 나의 회고장
        </Text>
        <PencilAnimation />
        <Button onClick={() => navigation('/question')}>시작하기</Button>
      </div>
    </CenterTemplate>
  );
}

export default HomePage;

const Text = styled.p`
  margin: 20px;
  line-height: 30px;
`;

const Button = styled.button`
  font-size: 20px;
  width: 120px;
  padding: 10px;
  border: none;
  background: #216e39;
  color: white;
  border-radius: 10px;
  font-size: bold;
  &:hover {
    background-color: #2e924e;
  }
`;
