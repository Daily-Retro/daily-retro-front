import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonType } from '../interfaces/reactType';
import { ThemeContext } from '../App';
import { Theme } from '../styles/theme';
// import { lightTheme } from '../styles/theme';

export default function Typing({ style, children, ...rest }: commonType) {
  const { theme } = React.useContext(ThemeContext);
  // const isLight = theme === lightTheme;

  return (
    <TypeWrite {...rest} style={style} theme={theme}>
      {children}
    </TypeWrite>
  );
}
/* Animation */
const typeWriter = keyframes`
    from{width: 0em;}
    to{width: 21em;}
`;
const blinkTextCursor = (theme: Theme) => keyframes`
    from{border-right-color: ${theme.text1};}
    to{border-right-color: transparent;}
`;

const TypeWrite = styled.p`
  width: 21em;
  overflow: hidden;
  white-space: nowrap;
  // letter-spacing: .05em;
  border-right: 1px solid ${({ theme }) => theme.text1};
  animation: ${typeWriter} 4s steps(44) 1s 1 normal both,
    ${({ theme }) => blinkTextCursor(theme)} 500ms steps(44) infinite normal;
`;
