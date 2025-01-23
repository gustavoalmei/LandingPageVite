import P from 'prop-types';
import { Heading } from '../Heading';
import * as S from './styles';

export default function LogoLink({ text, srcImg, link }) {
  return (
    <Heading size="small" uppercase>
      <S.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </S.Container>
    </Heading>
  );
}

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
