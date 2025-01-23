import MockLinks from '../../components/NavLinks/mock';
import { mock } from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase = {
  children: (
    <>
      <GridText {...mock} background />
      <GridText {...mock} />
      <GridText {...mock} background />
      <GridText {...mock} />
      <GridText {...mock} background />
      <GridText {...mock} />
    </>
  ),
  links: MockLinks,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<a>Teste de footer</a>',
};
