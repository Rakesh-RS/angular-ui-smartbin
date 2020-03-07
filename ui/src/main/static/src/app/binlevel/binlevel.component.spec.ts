import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinlevelComponent } from './binlevel.component';

describe('BinlevelComponent', () => {
  let component: BinlevelComponent;
  let fixture: ComponentFixture<BinlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
