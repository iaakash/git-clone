import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
