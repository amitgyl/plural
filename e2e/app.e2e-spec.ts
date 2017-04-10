import { PluralPage } from './app.po';

describe('plural App', () => {
  let page: PluralPage;

  beforeEach(() => {
    page = new PluralPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
