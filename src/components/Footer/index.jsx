import P from 'prop-types';
import React from 'react';
import Showdown from 'showdown';
import SectionContainer from '../SectionContainer';
import TextComponent from '../TextComponent';
import * as S from './styles';

export default function Footer({ footerHtml }) {
  const convertMD = (prop) => {
    var converter = new Showdown.Converter();

    return converter.makeHtml(prop);
  };
  return (
    <S.Container>
      <SectionContainer>
        <TextComponent>{convertMD(footerHtml)}</TextComponent>
      </SectionContainer>
    </S.Container>
  );
}

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
