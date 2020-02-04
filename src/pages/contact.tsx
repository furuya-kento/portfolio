import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Header from '../components/header';
const Container = styled.div`
 color: purple;
`

export default () => (
  <Container>
    <Link to="/">Home</Link>
    <Header headerText="Hello Gatsby!" />
    <p>Send us a message</p>
  </Container>
)
