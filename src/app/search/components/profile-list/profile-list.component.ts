import { environment } from './../../../../environments/environment';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileListComponent implements OnInit {
  
  @Input() data: any;
  profiles:any;
  p: number;
  ITEMS_PER_PAGE = environment.config.resultsPerPage;

  @Output() paginate: EventEmitter<any> = new EventEmitter();
  @Input() set currentPage(page) {
    this.p = page;
  }
  constructor() { }

  ngOnInit() {
   
  }

  ngOnChanges(change) {
    if(this.data) {
      this.profiles = {...this.data};
    }
  }

  onPageChange(page) {
      this.p = page;
      this.paginate.emit(this.p);
  }

}
