import { MobilePhoneModule } from './mobile-phone.module';

describe('MobilePhoneModule', () => {
  let mobilePhoneModule: MobilePhoneModule;

  beforeEach(() => {
    mobilePhoneModule = new MobilePhoneModule();
  });

  it('should create an instance', () => {
    expect(mobilePhoneModule).toBeTruthy();
  });
});
