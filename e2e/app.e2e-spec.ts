import { KotagaraTestPage } from './app.po';

describe('kotagara-test App', function() {
  let page: KotagaraTestPage;

  beforeEach(() => {
    page = new KotagaraTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
