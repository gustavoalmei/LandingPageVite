import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './data.json';

describe('map-sections', () => {
  test('Should render predefined sections if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  test('Should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  test('Should render sections with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const withNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });

  test('Should map values thow columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  test('Should map values thow columns', () => {
    const data = mapSectionTwoColumns({
      id: 3,
      __component: 'section.section-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description: 'ABC',
      image: {
        data: {
          id: 4,
          attributes: {
            name: 'javascript.svg',
            alternativeText: 'javascript.svg',
            caption: 'javascript.svg',
            width: null,
            height: null,
            formats: null,
            hash: 'javascript_8c37407653',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 30.31,
            url: 'a.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'javascript_8c37407653',
              resource_type: 'image',
            },
            createdAt: '2022-05-07T12:24:52.179Z',
            updatedAt: '2022-05-07T12:24:52.179Z',
          },
        },
      },
      metadata: {
        id: 8,
        name: 'home',
        section_id: 'home',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('ABC');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
  });

  test('Should map section content with no data', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  test('Should map section content', () => {
    const data = mapSectionContent({
      id: 3,
      __component: 'section.section-content',
      title: 'NEWS COVERAGE AND SOME SURPRISES',
      content: 'texto enorme aqui',
      metadata: {
        id: 7,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('texto enorme aqui');
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
  });

  test('Should map grid text', () => {
    const data = mapTextGrid({
      id: 3,
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'Uma breve descrição.\n\n',
      text_grid: [
        {
          id: 8,
          title: 'Teste 1',
          description: 'ABC',
        },
        {
          id: 9,
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
        {
          id: 7,
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
      ],
      image_grid: [],
      metadata: {
        id: 9,
        name: 'grid-one',
        section_id: 'grid-one',
        background: true,
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid');
    expect(data.sectionId).toBe('grid-one');
    expect(data.description).toBe('Uma breve descrição.\n\n');
    expect(data.title).toBe('MY GRID');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('ABC');
  });

  test('Should map grid text no value', () => {
    const data = mapTextGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });
});
