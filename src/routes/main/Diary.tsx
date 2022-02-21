import React from 'react'
import Layout from '../../components/Layout'
import LeftLayout from '../../components/LeftLayout';
import Page from '../../components/Page'

export default function Diary() {
  return (
    <Layout>
        <LeftLayout/>
        <Page content="content">
            안녕
        </Page>
  </Layout>
  )
}
