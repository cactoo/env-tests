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
          {VARS.map(v => (
            <li key={v}>
              {v}: <code>{process.env[v]}</code>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>GATSBY_ PREFIXED VARIABLES:</h2>
        <ul>
          {VARS.map(v => (
            <li key={v}>
              {v}: <code>{process.env[`GATSBY_${v}`]}</code>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
)

export default IndexPage
