import P from 'prop-types';
import { useEffect } from 'react';
import { Heading } from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';
import * as S from './styles';

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId,
}) => {
  useEffect(() => {
    // console.log(grid);
  }, [grid]);
  return (
    <SectionBackground backgroundBool={background} sectionId={sectionId}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map((el) => (
            <S.GridElement key={`${el.srcImg}${el.altText}`}>
              <S.Image src={el.srcImg} alt={el.altText} />
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string,
};
