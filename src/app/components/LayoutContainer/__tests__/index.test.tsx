import * as React from 'react';
import { render } from '@testing-library/react';

import { LayoutContainer } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<LayoutContainer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <LayoutContainer children={<div>Main</div>} />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
