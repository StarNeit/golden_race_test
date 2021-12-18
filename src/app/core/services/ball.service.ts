import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BallStatement } from '@app/models/ball.statement';
import { IBall } from '../../types';

let _state: BallStatement = new BallStatement();
const state$: BehaviorSubject<BallStatement> = new BehaviorSubject(_state)

@Injectable({ providedIn: 'root' })
export class BallService {

  constructor() {
  }

  public getState(): Observable<BallStatement> {
    return state$.asObservable();
  }

  public getSnapshot(): BallStatement {
    return state$.value;
  }

  public selectBall(selectedBall: IBall): void {
    if (!_state.result && _state.selected.length < 8) {
      const newState: BallStatement = {
        ..._state,
        selected: [
          ..._state.selected,
          selectedBall,
        ]
      }

      _state = newState;

      state$.next(newState);
    }
  }

  public removeBall(selectedBall: IBall): void {
    if (!_state.result) {
      const index = _state.selected.findIndex((item) => item.value === selectedBall.value);

      const updated = [..._state.selected];

      updated.splice(index, 1);

      _state = {
        ..._state,
        selected: updated,
      };

      state$.next(_state);
    }
  }

  public acceptBetAmount(): void {
    _state = {
      ..._state,
      earned: 0,
      isAccepted: true,
    }

    state$.next(_state);
  }

  public placeBet(amount: number): void {
    if (_state.isAccepted) {
      const newState = {
        ..._state,
      }
      const randomNumber = Math.floor(Math.random() * 10) + 1;

      const item = _state.selected.findIndex((item) => item.value === randomNumber);

      newState.result = randomNumber;
      newState.isWin = item > -1;
      newState.earned = item > -1 ? amount * 1.5 : undefined;

      _state = newState;

      state$.next(_state);
    }
  }

  public clearBall(): void {
    _state = {
      ..._state,
      selected: [],
    }

    state$.next(_state);
  }

  public replay(): void {
    _state = {
      isAccepted: false,
      isWin: false,
      result: 0,
      selected: [],
      earned: undefined,
    }

    state$.next(_state);
  }
}
