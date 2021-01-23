import { TestBed } from '@angular/core/testing';

import { CartSendService } from './cart-send.service';

describe('CartSendService', () => {
  let service: CartSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
