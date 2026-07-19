import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysCards } from './categorys-cards';

describe('CategorysCards', () => {
  let component: CategorysCards;
  let fixture: ComponentFixture<CategorysCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorysCards],
    }).compileComponents();

    fixture = TestBed.createComponent(CategorysCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
