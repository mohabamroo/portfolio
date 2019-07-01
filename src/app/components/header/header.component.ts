import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralService } from 'src/app/_services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public transparentNavFlag: boolean;
  public transparentFlagSubscriber: any;
  constructor(private generalService: GeneralService) {
    this.transparentFlagSubscriber = this.generalService.transparentHeaderFlag.subscribe(
      flag => {
        console.log('TCL: HeaderComponent -> constructor -> flag', flag);
        this.transparentNavFlag = flag;
      }
    );
  }

  ngOnInit() {
    this.transparentNavFlag = true;
  }

  ngOnDestroy() {
    this.transparentFlagSubscriber.unsubscribe();
  }
}
