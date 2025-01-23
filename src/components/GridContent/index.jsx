import P from 'prop-types';
import { Heading } from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';
import * as S from './styles';

export default function GridContent({
  background = false,
  html,
  title,
  sectionId,
}) {
  return (
    <SectionBackground backgroundBool={background} sectionId={sectionId}>
      <S.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <S.Html>
          <TextComponent>{html}</TextComponent>
        </S.Html>
      </S.Container>
    </SectionBackground>
  );
}

GridContent.propTypes = {
  html: P.string.isRequired,
  title: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
