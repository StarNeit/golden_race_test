import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BallService } from '@app/services/ball.service';
import { SlipComponent } from '@modules/slip/slip.component';

describe('SlipComponent', () => {
  let component: SlipComponent;
  let fixture: ComponentFixture<SlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlipComponent ],
      providers: [ BallService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
