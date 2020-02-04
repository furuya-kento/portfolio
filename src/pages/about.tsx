import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Header from "../components/header"
const Container = styled.div`
 color: teal;
`
export default () => (
  <Container>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </Container>
)