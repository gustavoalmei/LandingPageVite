import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import P from 'prop-types';
import React, { useEffect, useState } from 'react';
import LogoLink from '../LogoLink/';
import NavLinks from '../NavLinks';
import SectionContainer from '../SectionContainer';
import * as S from './styles';

export default function Menu({ links, logoData }) {
  const [visible, setVisible] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(true);

  useEffect(() => {
    const windowLoadFn = () => {
      const { innerWidth } = window;

      if (innerWidth <= 768) {
        setButtonHidden(false);
        setVisible(false);
      } else {
        setButtonHidden(true);
      }
    };

    window.addEventListener('load', windowLoadFn);

    return () => window.removeEventListener('load', windowLoadFn);
  }, []);

  useEffect(() => {
    const windowResizeFn = (e) => {
      const { innerWidth } = e.target;

      if (innerWidth <= 768 && visible) {
        setVisible(false);
        setButtonHidden(false);
      }

      if (innerWidth > 768 && !visible) {
        setVisible(true);
        setButtonHidden(true);
      }
    };

    window.addEventListener('resize', windowResizeFn);

    if (!buttonHidden && visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => window.removeEventListener('resize', windowResizeFn);
  }, [visible, buttonHidden]);
  return (
    <>
      <S.Button
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
        visible={visible}
        aria-hidden={buttonHidden}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </S.Button>
      <S.Container visible={visible} aria-hidden={!visible}>
        <SectionContainer>
          <S.MenuContainer onClick={() => setVisible(false)}>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </S.MenuContainer>
        </SectionContainer>
      </S.Container>
    </>
  );
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes),
};
