import React, { useContext } from 'react';
import styled from 'styled-components';
import { commonType } from '../interfaces/reactType';
import { ThemeContext } from '../App';

function Modal({ visible, onCancel, children }: commonType) {
  const { theme } = useContext(ThemeContext);

  if (!visible) return null;
  else
    return (
      <DarkBackground theme={theme}>
        <Mod.Modal theme={theme}>
          <Mod.Top>
            <span onClick={onCancel}>x</span>
          </Mod.Top>
          <Mod.Center>{children}</Mod.Center>
        </Mod.Modal>
      </DarkBackground>
    );
}

export default Modal;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const Mod = {
  Modal: styled.div`
    background: ${({ theme }) => theme.page};
    // width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    text-align: center;
    padding: 2em;
    z-index: 999;
  `,
  Top: styled.div`
    color: ${({ theme }) => theme.text1};
    float: right;
    // margin: 1em;
    span {
      cursor: pointer;
    }
  `,
  Center: styled.div`
    padding: 1em;
    color: ${({ theme }) => theme.primary};
    // text-transform: uppercase;
    // height: 100px;
    // // 수직, 수평 정렬
    // display: flex;
    // align-items: center;
    // justify-content: center;
  `,
};
