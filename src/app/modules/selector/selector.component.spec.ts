import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectorComponent } from '@modules/selector/selector.component';
import { BallComponent } from '@shared/components/ball/ball.component';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import { BallService } from '@app/services/ball.service';
import { SharedModule } from '@shared/shared.module';
import balls from '../../constants/ball.constant';

interface BallServiceMock {
  getSnapshot: jest.Mock,
}

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SelectorComponent,
      ],
      providers: [ BallService ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    // fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have ball list', () => {
    expect(component.ballGroup).toEqual([]);
  });

  it('should clear selection', () => {
    // component.onClearSelection();
    // const value = {
    //   field: 'nothing'
    // };
    //
    // TestBed.inject<BallServiceMock>(
    //   BallService as any
    // ).getSnapshot.mockReturnValueOnce(of(value));
  });
});
