import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiszczeComponent } from './miszcze.component';

describe('MiszczeComponent', () => {
  let component: MiszczeComponent;
  let fixture: ComponentFixture<MiszczeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiszczeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiszczeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
