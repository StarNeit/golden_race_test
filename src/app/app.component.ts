import { Component, OnInit } from '@angular/core';
import { BallService } from '@app/services/ball.service';
import { Observable } from 'rxjs';
import { BallStatement } from '@app/models/ball.statement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Golden Race';
  public $state: Observable<BallStatement> = new Observable<BallStatement>();

  constructor(
    private _ballService: BallService,
  ) {
    this.$state = this._ballService.getState();
  }

  ngOnInit(): void {
  }
}
