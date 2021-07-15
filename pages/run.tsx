import React from 'react'


import { Layout } from '../components/layout'
import { GetStaticProps } from 'next'
import { getDoc, Doc } from '../docs'

export const getStaticProps: GetStaticProps = async (context) => {
    return getDoc('run')    
}

const Page: React.FunctionComponent<Doc> = (props) => {
    return <Layout>
        <article id="doc" className="p-4 w-full max-w-screen-lg mx-auto" dangerouslySetInnerHTML={props} />
    </Layout>
}

export default Page