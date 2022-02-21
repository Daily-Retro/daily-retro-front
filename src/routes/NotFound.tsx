import React from 'react'
import styled, { keyframes } from "styled-components";

export default function NotFound() {
  return (
    <NotFoundPage>
        <Main>
            Not Found Page
        </Main>
    </NotFoundPage>
  )
}

const type = keyframes`
    from{
        box-shadow: inset -3px 0px 0px #888;
    }
    to{
        box-shadow: inset -3px 0px 0px transparent;
    }
`

const NotFoundPage = styled.div`
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
`
const Main = styled.div`
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: ${type} .5s alternate infinite;
`
