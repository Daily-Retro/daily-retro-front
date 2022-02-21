import React from 'react'
import { commonProps } from '../hooks/react.types'
import styled from "styled-components";

export default function Input({ style, children, ...rest }: commonProps) {
  return (
    <InputCustom/>
  )
}

const InputCustom = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #CCC;
  width: 90%;
  padding: 2em 0;
  &:focus {
      outline: none;    
    }
`


