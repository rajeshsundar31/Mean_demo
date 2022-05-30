import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyscmComponent } from './myscm.component';

describe('MyscmComponent', () => {
  let component: MyscmComponent;
  let fixture: ComponentFixture<MyscmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyscmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyscmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
