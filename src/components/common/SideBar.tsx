import styled from 'styled-components';
import { useState } from 'react';
import Nav from './Nav';

function SideBar() {
  const [click, setClick] = useState(false);
  return (
    <Wrapper size={String(click)}>
      <Nav click={click} setClick={setClick} />
    </Wrapper>
  );
}

export default SideBar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ size }: { size: string }) =>
    size === 'true' ? '500px' : '100px'};
  height: 100%;
  background-color: #4b9662;
  padding: 6px 14px;
  transition: all 0.5s ease;
`;
