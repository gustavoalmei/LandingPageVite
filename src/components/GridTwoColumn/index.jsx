import P from 'prop-types';
import React from 'react';
import { Heading } from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';
import * as S from './styles';

export default function GridTwoColumn({
  background = false,
  srcImg,
  title,
  text,
  sectionId,
}) {
  return (
    <SectionBackground backgroundBool={background} sectionId={sectionId}>
      <S.Container>
        <S.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </S.TextContainer>
        <S.imageContainer>
          <S.image src={srcImg} alt={title} />
        </S.imageContainer>
      </S.Container>
    </SectionBackground>
  );
}

GridTwoColumn.propTypes = {
  srcImg: P.string.isRequired,
  title: P.node.isRequired,
  text: P.node.isRequired,
  background: P.bool,
  sectionId: P.node,
};
