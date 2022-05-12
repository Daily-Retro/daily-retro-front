import styled from 'styled-components';
import {
  BsFillLockFill,
  BsFillUnlockFill,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsSunFill,
  BsPencilFill,
} from 'react-icons/bs';
import { clickType } from '../../interfaces/NavType';
import { useNavigate } from 'react-router-dom';

function Nav({ click, setClick }: clickType) {
  const navigation = useNavigate();
  return (
    <Wrapper>
      <MenuIcon onClick={() => setClick(!click)}>
        {click ? <BsFillUnlockFill /> : <BsFillLockFill />}
      </MenuIcon>
      <MenuIcon onClick={() => navigation('/')}>
        <BsHouseDoorFill />
      </MenuIcon>
      <MenuIcon onClick={() => navigation('/profile')}>
        <BsFillPersonFill />
      </MenuIcon>
      <MenuIcon onClick={() => navigation('/diary')}>
        <BsPencilFill />
      </MenuIcon>
      <MenuIcon>
        <BsSunFill />
      </MenuIcon>
    </Wrapper>
  );
}

export default Nav;

const Wrapper = styled.nav`
  position: absolute;
  top: 10px;
  right: 20px;
  color: #fff;
  width: 60px;
  height: 300px;
  border-radius: 10px;
  text-align: center;
`;

const MenuIcon = styled.button`
  font-size: 20px;
  border: none;
  background: #216e39;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    background-color: #2e924e;
  }
`;
