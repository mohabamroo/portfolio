import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private transparentHeaderFlagSubj = new BehaviorSubject(null);
  public transparentHeaderFlag = this.transparentHeaderFlagSubj.asObservable();

  constructor() {}

  forwardTransparentHeaderFlag(flag: boolean) {
    this.transparentHeaderFlagSubj.next(flag);
  }
}
