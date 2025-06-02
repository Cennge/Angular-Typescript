import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDescriptionComponent } from './button-description.component';

describe('ButtonDescriptionComponent', () => {
  let component: ButtonDescriptionComponent;
  let fixture: ComponentFixture<ButtonDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
