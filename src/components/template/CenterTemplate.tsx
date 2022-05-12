import styled from 'styled-components';
import { multipleChildType } from '../../interfaces/reactType';

function CenterTemplate({ children }: multipleChildType) {
  return <Center>{children}</Center>;
}

export default CenterTemplate;

const Center = styled.main`
  font-size: 20px;
  font-weight: bold;
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
`;
