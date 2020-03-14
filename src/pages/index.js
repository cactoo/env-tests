import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const VARS = [
  "NODE_ENV",
  "GATSBY_NODE_ENV",

  // BUILD METADATA
  "NETLIFY",
  "BUILD_ID",
  "CONTEXT",

  // GIT METADATA
  "REPOSITORY_URL",
  "BRANCH",
  "HEAD",
  "COMMIT_REF",
  "CACHED_COMMIT_REF",
  "PULL_REQUEST",
  "REVIEW_ID",

  // DEPLOY URLS
  "URL",
  "DEPLOY_URL",
  "DEPLOY_PRIME_URL",
  "DEPLOY_ID",
]

const IndexPage = () => (
  <Layout>
    <section style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h2>ENV VARIABLES:</h2>
        <ul>
          <li>NETLIFY: {process.env.NETLIFY},</li>
          <li>BUILD_ID: {process.env.BUILD_ID},</li>
          <li>CONTEXT: {process.env.CONTEXT},</li>
          <li>REPOSITORY_URL: {process.env.REPOSITORY_URL},</li>
          <li>BRANCH: {process.env.BRANCH},</li>
          <li>HEAD: {process.env.HEAD},</li>
          <li>COMMIT_REF: {process.env.COMMIT_REF},</li>
          <li>CACHED_COMMIT_REF: {process.env.CACHED_COMMIT_REF},</li>
          <li>PULL_REQUEST: {process.env.PULL_REQUEST},</li>
          <li>REVIEW_ID: {process.env.REVIEW_ID},</li>
          <li>URL: {process.env.URL},</li>
          <li>DEPLOY_URL: {process.env.DEPLOY_URL},</li>
          <li>DEPLOY_PRIME_URL: {process.env.DEPLOY_PRIME_URL},</li>
          <li>DEPLOY_ID: {process.env.DEPLOY_ID},</li>
          {/* {VARS.map(v => (
            <li key={v}>
              {v}: <code>{process.env[v]}</code>
            </li>
          ))} */}
        </ul>
      </div>
      <div>
        <h2>GATSBY_ PREFIXED VARIABLES:</h2>
        <ul>
          <li>NETLIFY: {process.env.GATSBY_NETLIFY},</li>
          <li>BUILD_ID: {process.env.GATSBY_BUILD_ID},</li>
          <li>CONTEXT: {process.env.GATSBY_CONTEXT},</li>
          <li>REPOSITORY_URL: {process.env.GATSBY_REPOSITORY_URL},</li>
          <li>BRANCH: {process.env.GATSBY_BRANCH},</li>
          <li>HEAD: {process.env.GATSBY_HEAD},</li>
          <li>COMMIT_REF: {process.env.GATSBY_COMMIT_REF},</li>
          <li>CACHED_COMMIT_REF: {process.env.GATSBY_CACHED_COMMIT_REF},</li>
          <li>PULL_REQUEST: {process.env.GATSBY_PULL_REQUEST},</li>
          <li>REVIEW_ID: {process.env.GATSBY_REVIEW_ID},</li>
          <li>URL: {process.env.GATSBY_URL},</li>
          <li>DEPLOY_URL: {process.env.GATSBY_DEPLOY_URL},</li>
          <li>DEPLOY_PRIME_URL: {process.env.GATSBY_DEPLOY_PRIME_URL},</li>
          <li>DEPLOY_ID: {process.env.GATSBY_DEPLOY_ID},</li>
          {/* {VARS.map(v => (
            <li key={v}>
              {v}: <code>{process.env[`GATSBY_${v}`]}</code>
            </li>
          ))} */}
        </ul>
      </div>
    </section>
  </Layout>
)

export default IndexPage
