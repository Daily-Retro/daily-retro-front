import { BsBookmarkPlusFill, BsBookmarkXFill } from 'react-icons/bs';
import styled from 'styled-components';
import { setNumberType } from '../../interfaces/setStateType';

function PlusMinus({ num, setNum }: setNumberType) {
  return (
    <Area>
      <BsBookmarkPlusFill onClick={() => setNum(num + 1)} />
      <BsBookmarkXFill
        onClick={() => {
          if (num > 3) {
            setNum(num - 1);
          }
        }}
      />
    </Area>
  );
}

export default PlusMinus;

const Area = styled.div`
  display: flex;
  color: #216e39;
  font-size: 45px;
  margin-bottom: 30px;
  svg {
    &:hover {
      color: #309952;
    }
  }
`;
