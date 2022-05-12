import React from 'react';
import styled, { css } from 'styled-components';
import { commonType } from '../../interfaces/reactType';
import { ThemeContext } from '../../App';

export default function Button({ style, children, ...rest }: commonType) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <ButtonCustom theme={theme} {...rest} style={style}>
      {children}
    </ButtonCustom>
  );
}

const ButtonCustom = styled.button<commonType>`
  border: none;
  padding: 1em 4em;
  border-radius: 10px;
  margin: 0 5px;
  font-family: 'TmoneyRoundWindRegular';
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border3};
  color: ${({ theme }) => theme.text1};
  &:hover {
    background: ${({ theme }) => theme.opacity};
    color: #000;
  }
  ${props =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.primary};
      color: #fff;
      &:hover {
        background: ${({ theme }) => theme.opacity};
        color: #000;
      }
    `}
`;
