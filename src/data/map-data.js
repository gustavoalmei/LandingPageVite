import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData?.map((data) => {
    const {
      attributes: {
        footer_text = '',
        slug = '',
        title = '',
        sections = [],
        menu = {},
      } = '',
    } = data;
    return {
      footer_text,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
