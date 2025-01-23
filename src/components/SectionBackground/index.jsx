import P from 'prop-types';
import React from 'react';
import SectionContainer from '../SectionContainer';
import * as S from './styles';

export default function SectionBackground({
  children,
  backgroundBool = false,
  sectionId = '',
}) {
  return (
    <S.Container background={backgroundBool} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </S.Container>
  );
}

SectionBackground.propTypes = {
  children: P.node,
  backgroundBool: P.bool,
  sectionId: P.string,
};
