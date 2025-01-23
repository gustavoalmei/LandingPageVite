import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';
import React from 'react';
import * as S from './styles';

export default function GoTop() {
  return (
    <S.Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </S.Container>
  );
}
