import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaciassdopiaComponent } from './maciassdopia.component';

describe('MaciassdopiaComponent', () => {
  let component: MaciassdopiaComponent;
  let fixture: ComponentFixture<MaciassdopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaciassdopiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaciassdopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
