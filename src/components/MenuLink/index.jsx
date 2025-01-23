import P from 'prop-types';
import React from 'react';
import * as S from './styles';

export default function MenuLink({ children, link, newTab = false }) {
  const target = newTab ? '_blank' : '_self';
  return (
    <S.Container href={link} target={target}>
      {children}
    </S.Container>
  );
}

MenuLink.propTypes = {
  children: P.node,
  link: P.string.isRequired,
  newTab: P.bool,
};
