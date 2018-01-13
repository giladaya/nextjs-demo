import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

export const IndexPage = () => (
  <Layout header={<Header notificationsCount={5} user={{name: 'user1'}}/>}>
    <div>
      This is the homepage
    </div>
  </Layout>
)

export default IndexPage
