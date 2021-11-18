import { TestBed, async, inject } from '@angular/core/testing';

import { PlayerGuardGuard } from './player-guard.guard';

describe('PlayerGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerGuardGuard]
    });
  });

  it('should ...', inject([PlayerGuardGuard], (guard: PlayerGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
