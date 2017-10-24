import { FarmacyModule } from './farmacy.module';

describe('FarmacyModule', () => {
  let farmacyModule: FarmacyModule;

  beforeEach(() => {
    farmacyModule = new FarmacyModule();
  });

  it('should create an instance', () => {
    expect(farmacyModule).toBeTruthy();
  });
});
