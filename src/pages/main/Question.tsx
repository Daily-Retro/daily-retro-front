import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import styled from 'styled-components';
import Button from '../../components/common/Button';
import LeftLayout from '../../components/LeftLayout';
import Modal from '../../components/common/Modal';
import Input from '../../components/Input';

export default function Question() {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <Layout>
    <LeftLayout/>
    <Page content="content">
        <Avatar>
            <img src='' alt='프로필'/>
        </Avatar>
        <TitleArea>
            <h1>질문 리스트</h1>
            <span style={{cursor: 'pointer'}} onClick={() => setIsModalVisible(true)}>📝</span>
        </TitleArea>
            <Modal
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            >
            <Description>
            <li>질문 리스트는 매일 매일 나에게 물어보는 질문 리스트 입니다.</li>
            <li>예를 들어 아래와 같이 작성하면 됩니다!</li>
            <li>1. 오늘은 무엇을 먹었나요?</li>
            <li>2. 오늘은 운동을 했었나요?</li>
            <li>3. 오늘은 공부를 했었나요?</li>
        </Description>
        </Modal>
        <QuestionArea>
            <div>1) <Input/></div>
            <div>2) <Input/></div>
            <div>3) <Input/></div>
        </QuestionArea>
        <ButtonArea>
            <Button primary='primary'>저장</Button>
            <Button>취소</Button>
        </ButtonArea>
    </Page>
  </Layout>
  )
}

const Avatar = styled.div`
    width: 10rem;
    height: 10em;
    img{
        width: 100%;
        border-radius: 50%;
    }
`
const Description = styled.ul`
    width: 30em;
    line-height: 3em;
    list-style: none;
`

const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
`
const TitleArea = styled.div`
    display: flex;
    flex-direction: row;
`

const QuestionArea = styled.div`
    min-height: 30vh;
    min-width: 20em;
    // overflow-y: scroll;
    // &::-webkit-scrollbar-thumb{
    //     background-color: rgba(255,255,255,1);
    //     /* 스크롤바 둥글게 설정    */
    //     border-radius: 10px;    
    // }
`