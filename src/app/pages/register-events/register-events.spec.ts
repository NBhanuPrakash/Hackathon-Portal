import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEvents } from './register-events';

describe('RegisterEvents', () => {
  let component: RegisterEvents;
  let fixture: ComponentFixture<RegisterEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
