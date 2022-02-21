import React from 'react'
import styled, { css } from "styled-components";
import { commonProps } from '../hooks/react.types';
import { ThemeContext } from '../App';


export default function Button({ style, children, ...rest }: commonProps) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <ButtonCustom theme={theme} {...rest} style={style}>
        {children}
    </ButtonCustom>
  )
}

const ButtonCustom = styled.button<commonProps>`
    border: none;
    padding: 1em 4em;
    border-radius: 2em;
    font-family: 'TmoneyRoundWindRegular';
    background: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.border3};
    color: ${({ theme }) => theme.text1};
    &:hover{
      background: ${({ theme }) => theme.opacity};
      color: #000;
    }
    ${props => props.primary &&
      css`
        background: ${({ theme }) => theme.primary};
        color: #fff;
        &:hover{
          background: ${({ theme }) => theme.opacity};
          color: #000;
        }
      `
    }
`