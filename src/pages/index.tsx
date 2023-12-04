import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Editor from '@site/src/components/editor';
import ChatBox from '@site/src/components/ChatBox';
import landingJson from '../../landing.json'
import Landing from "./_landing_page.md"
import styles from './index.module.css';
import Parser from '../components/Parser';



export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext()
  const data = landingJson
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className="landing">
        <Landing />
        <Parser />
      </main>
    </Layout>
  );
}