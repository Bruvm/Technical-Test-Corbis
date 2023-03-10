import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyMapsComponent } from './strategy-maps.component';

describe('StrategyMapsComponent', () => {
  let component: StrategyMapsComponent;
  let fixture: ComponentFixture<StrategyMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategyMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
