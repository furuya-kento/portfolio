import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import props from './header';

interface Props {
  headerText: string;
} 

export default function Header(props: Props) {
  return (
    <h1>{props.headerText}</h1>
  );
}
