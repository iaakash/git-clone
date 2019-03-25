import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchButtonComponent implements OnInit {
  
  @Input() disabled: boolean;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit();
  }

}
