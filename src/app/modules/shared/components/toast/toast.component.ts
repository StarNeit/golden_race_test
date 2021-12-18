import {Component, OnInit} from "@angular/core";
import {BallService} from "@app/services/ball.service";
import {Observable} from "rxjs";
import {BallStatement} from "@app/models/ball.statement";
import {IBall} from "../../../../types";
import balls from '../../../../constants/ball.constant';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [BallService],
})
export class ToastComponent implements OnInit{
  public $state: Observable<BallStatement> = new Observable<BallStatement>();
  public resultBall: IBall | undefined = undefined;
  public isWin: boolean = false;

  constructor(private _ballService: BallService) {
    this.$state = this._ballService.getState();
  }

  ngOnInit() {
    const state = this._ballService.getSnapshot();

    const active = balls.find((item: IBall) => item.value === state.result);
    this.isWin = state.isWin;
    this.resultBall = active;
  }

  public onReplay() {
    this._ballService.replay();
  }
}
