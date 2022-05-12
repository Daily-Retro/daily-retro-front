import { avatar } from '../../constants/img';
import styled from 'styled-components';

function Avatar() {
  return <AvatarImg />;
}

export default Avatar;

const AvatarImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
  background-image: url(${avatar});
`;
