import { Component } from '@angular/core';
import { BallService } from '@app/services/ball.service';
import { Observable } from 'rxjs';
import { BallStatement } from '@app/models/ball.statement';

@Component({
  selector: 'bet-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.scss'],
  providers: [BallService]
})

export class SlipComponent {
  public bet = 0;
  public totalBet = 0;
  public $state: Observable<BallStatement> = new Observable<BallStatement>();
  public sites = new Array(8).fill(0);

  constructor(private _ballService: BallService) {
    this.$state = this._ballService.getState();
    this.$state.subscribe(({ selected, earned }) => {
      this.sites = new Array(Math.max(8 - selected.length, 0)).fill(0);

      if (earned === undefined) {
        this.totalBet = 0;
        this.bet = 0;
      }
    });
  }

  public onClickOk() {
    const state = this._ballService.getSnapshot();

    if (this.bet >= 5 && state.selected.length) {
      this.totalBet = this.bet * state.selected.length;
      this._ballService.acceptBetAmount();
    }
  }

  public onPlaceBet() {
    this._ballService.placeBet(this.totalBet);
  }
}
