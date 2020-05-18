import * as fromCountry from './country.actions';

describe('loadCountrys', () => {
  it('should return an action', () => {
    expect(fromCountry.loadCountrys().type).toBe('[Country] Load Countrys');
  });
});
