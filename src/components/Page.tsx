import * as React  from 'react';
import styled, { css } from "styled-components";
import { ThemeContext } from '../App';
import { media } from '../styles/media';

interface PageProps{
  style?: React.CSSProperties;
  content?: string;
}

const Page: React.FC<PageProps> = ({
  children,
  style,
  content
}) => {

  const { theme } = React.useContext(ThemeContext);

  return (
    <MainStyle theme={theme} style={style} content={content}>
      <Content>
        {children}   
      </Content>
    </MainStyle>
  );
};

export default Page;

const MainStyle = styled.div<PageProps>`
    min-width: 40em;
    min-height: 90vh;
    // margin-top: 2em;
    // background: ${({ theme }) => theme.page};
    // border-radius: 2em;
    // box-shadow: inset 0px 1px 10px 0px rgba(0, 0, 0, 0.5);
    ${media.mobile`
      min-width: 100%;
      margin-left: 0;
      border-radius: 3em;
    `}
    ${props => props.content && 
      css`
        width: 100%;
        margin-left: 2em;
        border-radius: 5em;
        // border-radius: 5em 0 0 5em;
        // box-shadow: inset 0px 1px 10px 0px rgba(0, 0, 0, 0.5);
        background: ${({ theme }) => theme.page};
      `
    }
`

const Content = styled.div`
    margin-top: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    vertical-align: center;
`