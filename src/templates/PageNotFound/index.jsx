import React from 'react';
import GridContent from '../../components/GridContent';

export default function PageNotFound() {
  return (
    <GridContent
      title={'Error 404'}
      html='<p>
          A página que você buscou não existe.<a href="/">Clique para voltar</a>
        </p>'
    />
  );
}
