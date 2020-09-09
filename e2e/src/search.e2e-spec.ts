import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('search', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to search page', () => {
    browser.waitForAngular();
    page.getSearchButton().click();
    browser.waitForAngular();
    browser.getCurrentUrl().then(function (actualUrl) {
      expect(actualUrl).toContain('search');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
