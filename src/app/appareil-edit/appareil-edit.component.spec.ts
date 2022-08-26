import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilEditComponent } from './appareil-edit.component';

describe('AppareilEditComponent', () => {
  let component: AppareilEditComponent;
  let fixture: ComponentFixture<AppareilEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
