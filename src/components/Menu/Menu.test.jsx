import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mock from '../../components/NavLinks/mock';
import { RenderTheme } from '../../styles/handleTheme';
import Menu from './index';

const logoData = {
  text: 'Logo',
  link: '#target',
};

const resizeWindow = (width = 1024, height = 900) => {
  return new Promise((resolve) => {
    window.innerWidth = width;
    window.innerHeight = height;
    window.dispatchEvent(new Event('load'));
    window.dispatchEvent(new Event('resize'));
    resolve();
  });
};

describe('<Menu />', () => {
  it('should render menu on desktop', () => {
    const { container } = RenderTheme(
      <Menu links={mock} logoData={logoData} />,
    );
    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByLabelText('Main menu')).toBeInTheDocument();
    expect(screen.getByLabelText('Open/Close menu')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
    expect(container).toMatchSnapshot();
  });

  it('should render open/close menu button and menu mobile', async () => {
    RenderTheme(<Menu links={mock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');
    expect(button).toHaveAttribute('aria-hidden', 'true');

    await waitFor(async () => {
      await resizeWindow(640);
    });

    expect(button).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.queryByLabelText('Main menu')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Main menu'));
    expect(button).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Logo' }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByLabelText('Main menu').parentElement.parentElement
        .parentElement,
    ).toHaveAttribute('aria-hidden', 'true');

    await waitFor(async () => {
      await resizeWindow(800);
    });

    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByLabelText('Main menu')).toBeInTheDocument();
    expect(screen.getByLabelText('Open/Close menu')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  // it('should not render links', () => {
  //   const { container } = RenderTheme(<Menu logoData={logoData} />);
  //   expect(
  //     expect(screen.getByLabelText('Main menu')).firstChild,
  //   ).not.toBeInTheDocument();
  // });

  // it('should match snapshot on mobile', async () => {
  //   const { container } = RenderTheme(
  //     <Menu links={mock} logoData={logoData} />,
  //   );

  //   await waitFor(async () => {
  //     await resizeWindow(640);
  //   });

  //   expect(container).toMatchSnapshot();
  // });
});
