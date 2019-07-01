import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/_services/general.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public title: string;
  public transparentHeader: boolean;

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService
  ) {
    this.route.data.subscribe(
      (data: { title: string; transparentHeader: boolean }) => {
        this.title = data.title;
        this.transparentHeader = data.transparentHeader;
        this.generalService.forwardTransparentHeaderFlag(
          this.transparentHeader
        );
      }
    );
  }

  ngOnInit() {}
}
