import { useEffect, useRef, useState } from 'react';

import { mapData } from '../../data/map-data';

import { useLocation } from 'react-router-dom';
import GridContent from '../../components/GridContent';
import { GridImage } from '../../components/GridImage';
import { GridText } from '../../components/GridText';
import GridTwoColumns from '../../components/GridTwoColumn';
import config from '../../config';
import Base from '../Base/index';
import Loading from '../Loading/Loading';
import PageNotFound from '../PageNotFound';

export const Home = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
  const id = pathname ? pathname : config.slugDefault;

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando  | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title}  | ${config.siteName}`;
    }
  }, [data]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          `${config.url}?filters[slug]=${id}&populate=deep`,
        );
        const res = await data.json();
        const pagesData = mapData(res.data);

        setData(pagesData[0]);
      } catch (error) {
        setData(undefined);
      }
    };
    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [id]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footer_text } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      logoData={{ text, link, srcImg }}
      footerHtml={footer_text}
      links={links}
    >
      {sections.map((section) => {
        const { component } = section;
        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={section.sectionId} {...section} />;
        }
        if (component === 'section.section-grid') {
          return <GridText key={section.sectionId} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={section.sectionId} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={section.sectionId} {...section} />;
        }
      })}
    </Base>
  );
};
