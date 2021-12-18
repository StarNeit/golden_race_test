import {Component, Input} from "@angular/core";
import {BallService} from "@app/services/ball.service";
import {IBall} from "../../../../types";

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
  providers: [BallService],
})

export class BallComponent {
  @Input() ball: any = {};
  @Input() set active(balls: IBall[]) {
    this.isActive = balls.map((ball) => ball.value).includes(this.ball?.value);
  };
  @Input() selected: boolean = false;

  public isActive: boolean = false;

  constructor(private _ballService: BallService) {
  }

  selectBall() {
    if (!this.selected) {
      this._ballService.selectBall(this.ball);
    } else {
      this._ballService.removeBall(this.ball);
    }
  }
}
