import { PmsRevisionAppPage } from './app.po';

describe('pms-revision-app App', () => {
  let page: PmsRevisionAppPage;

  beforeEach(() => {
    page = new PmsRevisionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
