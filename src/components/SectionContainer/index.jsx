import P from 'prop-types';
import React from 'react';
import * as S from './styles';

export default function SectionContainer({ children }) {
  return <S.Container>{children}</S.Container>;
}

SectionContainer.propTypes = {
  children: P.node,
};
