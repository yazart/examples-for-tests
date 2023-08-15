import { TestBed } from '@angular/core/testing';

import { ServiceForTestService } from './service-for-test.service';

describe('ShelvingTypesDataService', () => {
  let service: ServiceForTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // если нужно вложить какие-то зависимости
    });
    service = TestBed.inject(ServiceForTestService);
  });

  it('Должен быть создан', () => {
    expect(service).toBeTruthy();
  });
});
