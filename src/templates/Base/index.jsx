import React from 'react';
import * as S from './styles';
import P from 'prop-types';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';

export default function TemplateBase({
  links,
  logoData,
  footerHtml,
  children,
}) {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <S.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </S.Container>
      <GoTop />
    </>
  );
}

TemplateBase.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
