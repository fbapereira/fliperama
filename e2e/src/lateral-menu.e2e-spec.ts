import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('lateral-menu', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display lateral menu', () => {
    browser.waitForAngular();
    page.getMenuButton().click();
    browser.sleep(1000);
    page.getLateralMenu().getLocation().then(function (location) {
      expect(location.x).toEqual(0);
    });
  });

  it('should close lateral menu', () => {
    browser.waitForAngular();
    page.getMenuButton().click();
    browser.sleep(1000);
    page.getLateralMenu().getLocation().then(function (location) {
      expect(location.x).toBeLessThan(0);
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
