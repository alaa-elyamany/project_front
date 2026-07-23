import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whatsnew } from './whatsnew';

describe('Whatsnew', () => {
  let component: Whatsnew;
  let fixture: ComponentFixture<Whatsnew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whatsnew],
    }).compileComponents();

    fixture = TestBed.createComponent(Whatsnew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
