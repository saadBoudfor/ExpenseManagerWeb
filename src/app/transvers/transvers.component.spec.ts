import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransversComponent } from './transvers.component';

describe('TransversComponent', () => {
  let component: TransversComponent;
  let fixture: ComponentFixture<TransversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
