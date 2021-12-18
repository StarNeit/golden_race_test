import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BallService } from '@app/services/ball.service';
import { BallStatement } from '@app/models/ball.statement';
import balls from '../../constants/ball.constant';

@Component({
  selector: 'ball-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  providers: [BallService]
})

export class SelectorComponent implements OnInit{
  public ballGroup = balls;
  public $state: Observable<BallStatement> = new Observable<BallStatement>();

  constructor(private _ballService: BallService) {
  }

  ngOnInit() {
    this.$state = this._ballService.getState();
  }

  public onClearSelection() {
    this._ballService.clearBall();
  }
}
