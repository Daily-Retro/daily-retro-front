import React from 'react';
import { commonType } from '../interfaces/reactType';
import styled from 'styled-components';

export default function Input({ style, children, ...rest }: commonType) {
  return <InputCustom />;
}

const InputCustom = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 90%;
  padding: 2em 0;
  &:focus {
    outline: none;
  }
`;
