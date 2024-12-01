import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedProjectsScrollerComponent } from './animated-projects-scroller.component';

describe('AnimatedProjectsScrollerComponent', () => {
  let component: AnimatedProjectsScrollerComponent;
  let fixture: ComponentFixture<AnimatedProjectsScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedProjectsScrollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedProjectsScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
