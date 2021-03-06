import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import TimeClarification from '../../lib/_TimeClarification';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

it('should render a default date time picker', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <TimeClarification
        isOpen
        isOffsetButtonHidden
        onDaylightSavingButtonClick={jest.fn()}
        onStandardTimeButtonClick={jest.fn()}
        onOffsetButtonClick={jest.fn()}
        onRequestClose={jest.fn()}
        releaseFocus={jest.fn()}
        requestFocus={jest.fn()}
      />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});
