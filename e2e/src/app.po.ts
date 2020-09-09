import { browser, by, element, By } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .home-banner-content h1')).getText() as Promise<string>;
  }

  getMenuButton() {
    return element(by.css('[data-e2e="menu-button"]'));
  }

  getSearchButton() {
    return element(by.css('[data-e2e="search-button"]'));
  }

  getLateralMenu() {
    return element(by.css('[data-e2e="lateral-menu"]'));
  }

  getLateralItemMenu() {
    return element(by.css('[data-e2e="lateral-menu-item-1"]'));
  }
}
