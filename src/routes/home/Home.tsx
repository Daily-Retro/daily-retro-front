import React from 'react'
import styled from 'styled-components';
import CalendarTemplate from '../../components/CalendarTemplate';
import DarkModeToggle from '../../components/DarkModeToggle';
import Layout from '../../components/Layout';
import LeftLayout from '../../components/LeftLayout';
import Page from '../../components/Page';
import PencilAnimation from '../../components/PencilAnimation';
import Typing from '../../components/Typing';
import Login from './Login';

export default function Main() {
  return (
      <>
      <Layout>
        <LeftLayout/>
        <Page content="content">
            <Title>Daily Retro</Title>
            <Typing>
                내가 정해놓은 질문에 맞춰 회고하는 나의 일기장
            </Typing>
            <AnimationArea>
                <PencilAnimation/>
                {/* <img src="https://images.unsplash.com/photo-1585829365250-4d6c9f1a3284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='애니메이션 대체'/> */}
            </AnimationArea>
            {/* 구글 로그인 */}
            <Login/>
        </Page>
      </Layout>
      </>
  )
}
const Title = styled.h1``

const AnimationArea = styled.div`
    width: 30rem;
    height: 17rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 30rem;
        height: 17rem;
    }
`