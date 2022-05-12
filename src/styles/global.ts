import { createGlobalStyle } from 'styled-components';
import { themeInterface } from '../interfaces/themeType';

export const GlobalStyle = createGlobalStyle<themeInterface>`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    #root{
        position: relative;
    }
    svg, button{
        cursor: pointer;
    }
`;
