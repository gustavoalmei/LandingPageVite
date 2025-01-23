import P from 'prop-types';
import MenuLink from '../MenuLink';
import * as S from './styles';

export default function NavLinks({ links = [] }) {
  return (
    <S.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink
          key={`${link.link}-${link.children}`}
          link={link.link}
          {...link}
        />
      ))}
    </S.Container>
  );
}

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      link: P.string.isRequired,
      newTab: P.bool,
      children: P.string.isRequired,
    }),
  ),
};
