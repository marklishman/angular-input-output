import { AppPage } from './app.po';

describe('angular-input-output App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have correct title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Angular Input Output');
  });
});
