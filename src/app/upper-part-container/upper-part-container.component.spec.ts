import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperPartContainerComponent } from './upper-part-container.component';

describe('UpperPartContainerComponent', () => {
  let component: UpperPartContainerComponent;
  let fixture: ComponentFixture<UpperPartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperPartContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperPartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
