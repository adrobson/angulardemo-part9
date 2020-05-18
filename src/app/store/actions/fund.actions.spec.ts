import * as fromFund from './fund.actions';

describe('loadFunds', () => {
  it('should return an action', () => {
    expect(fromFund.loadFunds().type).toBe('[Fund] Load Funds');
  });
});
