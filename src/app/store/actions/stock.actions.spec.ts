import * as fromStock from './stock.actions';

describe('loadStocks', () => {
  it('should return an action', () => {
    expect(fromStock.loadStocks().type).toBe('[Stock] Load Stocks');
  });
});
