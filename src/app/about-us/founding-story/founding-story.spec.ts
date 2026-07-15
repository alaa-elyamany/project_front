import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundingStory } from './founding-story';

describe('FoundingStory', () => {
  let component: FoundingStory;
  let fixture: ComponentFixture<FoundingStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundingStory],
    }).compileComponents();

    fixture = TestBed.createComponent(FoundingStory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
