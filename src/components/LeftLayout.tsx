import React from 'react'
import styled from 'styled-components';
import CalendarTemplate from './CalendarTemplate';
import DarkModeToggle from './DarkModeToggle';
import Page from './Page';

export default function LeftLayout() {
  return (
    <Page>
      <MenuBar>
          <DarkModeToggle/>
      </MenuBar>
      <CalendarTemplate/>
  </Page>
  )
}

const MenuBar = styled.div`
    width: 100%;
    // border: 1px solid #000;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    vertical-align: center;
`