import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admincomponents } from './admincomponents';

describe('Admincomponents', () => {
  let component: Admincomponents;
  let fixture: ComponentFixture<Admincomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admincomponents],
    }).compileComponents();

    fixture = TestBed.createComponent(Admincomponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
