import { ComponentFixture, TestBed } from '@angular/core/testing';

import {BallComponent} from "@modules/shared/components/ball/ball.component";

describe('BallComponent', () => {
  let component: BallComponent;
  let fixture: ComponentFixture<BallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
