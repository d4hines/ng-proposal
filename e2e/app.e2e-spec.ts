import { NgProposalPage } from './app.po';

describe('ng-proposal App', () => {
  let page: NgProposalPage;

  beforeEach(() => {
    page = new NgProposalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
