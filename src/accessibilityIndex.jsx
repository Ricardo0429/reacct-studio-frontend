

/* eslint-disable import/first */
import './SFE.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

import AccessibilityPolicyPage from './components/AccessibilityPolicyPage';
import store from './data/store';
/* eslint-enable import/first */

/* This page is deliberately *not* making use of src/utils/i18n/loadI18nDomData.jsx
 *
 * For legal purposes, we want to translate the entire page as a whole using some
 * yet-to-be-determined mechanism.
*/
const locale = 'en';
const messages = {};
addLocaleData(enLocaleData);

function AccessibilityApp() {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <Provider store={store}>
        <div className="SFE-wrapper">
          <AccessibilityPolicyPage
            communityAccessibilityLink="https://www.edx.org/accessibility"
            email="accessibility@edx.org"
          />
        </div>
        <div className="Moodle-wrapper">
          <AccessibilityPolicyPage
            communityAccessibilityLink="https://www.moodle.org/accessibility"
            email="accessibility@moodle.org"
          />
        </div>
      </Provider>
    </IntlProvider>
  );
}

ReactDOM.render(<AccessibilityApp />, document.getElementById('root'));
