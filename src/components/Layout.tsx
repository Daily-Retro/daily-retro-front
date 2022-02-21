import React, { useContext } from 'react';
import styled from "styled-components";
import { ThemeContext } from '../App';
import { media } from '../styles/media';
// import DarkModeToggle from './DarkModeToggle';

type LayoutProps = {
    children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  const { theme } = useContext(ThemeContext);
  return (
        <Border theme={theme}>
                {/* <DarkModeToggle /> */}
                <Content>
                    {children}
                </Content>
        </Border>
  )
}

const Border = styled.div`
    background: rgba(${({ theme }) => theme.opacity}, 0.53);
    // background: ${({ theme }) => theme.page};
    width: 100%;
    min-height: 100vh;
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2em;
    // margin: 0 4em;
    position: relative;
    ${media.mobile`
        // flex-direction: column-reverse;
        flex-direction: column;
        padding: 0px;
        width: 100%;
        margin: 0;
        padding-bottom: 4em;
    `}
`;
