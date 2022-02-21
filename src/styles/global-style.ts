import { createGlobalStyle } from 'styled-components';
import { ThemeInterface } from './index.types';

export const GlobalStyle = createGlobalStyle<ThemeInterface>`
    @font-face {
        font-family: 'TmoneyRoundWindRegular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text1};
        font-family: 'TmoneyRoundWindRegular';
        // font-family: 'NanumSquareRound';
    }
    // 캘린더 css
    .Calendar{
        font-size: 0.9rem;
        box-shadow: none;
        background-color: transparent;
        z-index: 0;
    }
    .custom-calendar {
        .Calendar__monthYear > *{
            color: ${({ theme }) => theme.text1};
            &:hover{
                color: #000;
            }
        }
        .-activeBackground{
            color: #000;
        }
        .Calendar__monthArrow{
            filter: opacity(0.5) drop-shadow(0 0 0 ${({ theme }) => theme.primary});
        }
        .Calendar__day{
            color: ${({ theme }) => theme.text2};
        }
        // 오늘 날짜
        .Calendar__day.-today:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween){
            color: ${({ theme }) => theme.text1};
            ::after{
                background-color: ${({ theme }) => theme.text1};
            }
        }
        // 년도 선택
        .Calendar__monthSelector, .Calendar__yearSelector{
            background-color: ${({ theme }) => theme.body};
        }
        .Calendar__monthSelectorItemText, .Calendar__yearSelectorText{
            color: ${({ theme }) => theme.text2};
            &:hover{
                color: #000;
            }
        }
        .Calendar__yearSelectorWrapper::after{
            background-image: none;
        }
        .Calendar__yearSelectorWrapper::before{
            background-image: none;
        }
    }
    .purpleDay:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
        border: 2px solid rgba(156, 136, 255, 0.7) !important;
    }
    
    .orangeDay:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
        border: 2px solid rgba(219, 145, 60, 0.7) !important;
    }
    
    .yellowDay:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
        border: 2px solid rgba(228, 231, 36, 0.7) !important;
    }
    
    .navyBlueDay:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
        border: 2px solid rgba(52, 73, 94, 0.7) !important;
    }
`