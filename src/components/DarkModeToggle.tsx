import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';
import { lightTheme } from '../styles/theme';
import UimMoonSet from '../icon/UimMoonSet';
import UimSunSet from '../icon/UimSunSet';
import { animated, useTransition } from 'react-spring';

export default function DarkModeToggle() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === lightTheme;
  const transitions = useTransition(isLight, {
    initial: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    from: {
      transform: 'scale(0) rotate(-180deg)',
      opacity: 0,
    },
    enter: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    leave: {
      transform: 'scale(0) rotate(180deg)',
      opacity: 0,
    },
  
    reverse: true,
  });

  return (
     <ToggleButton onClick={toggleTheme} theme={theme}>
       {transitions((style, item) =>
        item ? (
          <Positioner>
            <AnimatedSVGWrapper style={style}>
              <UimSunSet color='#FF0000'/>
            </AnimatedSVGWrapper>
          </Positioner>
        ) : (
          <Positioner>
            <AnimatedSVGWrapper style={style}>
              <UimMoonSet color='#FAFF00'/>
            </AnimatedSVGWrapper>
          </Positioner>
        ),
      )}
    </ToggleButton>
  )
}

const ToggleButton = styled.button`
  float: right;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 2rem;
  color: white;
  position: relative;
  &:hover {
    background: ${({ theme }) => theme.page};
  }
`;

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SVGWrapper = styled.div`
  svg {
    display: block;
    font-size: 2em;
  }
`;

const AnimatedSVGWrapper = animated(SVGWrapper);