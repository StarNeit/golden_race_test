import { IBall } from '../../types';

export class BallStatement {
  public selected: IBall[] = [];
  public isAccepted: boolean = false;
  public isWin: boolean = false;
  public result: number = 0;
  public earned?: number = 0;
}
