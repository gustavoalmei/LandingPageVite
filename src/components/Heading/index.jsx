import P from 'prop-types';
import * as S from './styles';

export const Heading = ({
  children,
  colorDark = true,
  uppercase = false,
  as = 'h1',
  size = 'huge',
}) => {
  return (
    <S.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </S.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
