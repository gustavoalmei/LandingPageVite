import P from 'prop-types';
import React from 'react';
import { Heading } from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponet from '../TextComponent';
import * as S from './styles';

export default function GridSection({ title, description, grid, background }) {
  return (
    <SectionBackground backgroundBool={background}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h1">
          {title}
        </Heading>
        <TextComponet>{description}</TextComponet>
        <S.Grid>
          {grid.map((el) => (
            <S.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h2">
                {el.title}
              </Heading>
              <TextComponet>{el.description}</TextComponet>
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
}

GridSection.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
