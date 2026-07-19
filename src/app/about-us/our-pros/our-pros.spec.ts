import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPros } from './our-pros';

describe('OurPros', () => {
  let component: OurPros;
  let fixture: ComponentFixture<OurPros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPros],
    }).compileComponents();

    fixture = TestBed.createComponent(OurPros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
