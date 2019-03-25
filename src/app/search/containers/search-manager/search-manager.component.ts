import { LoaderService } from './../../../shared/components/loader/loader.service';
import { SearchService } from './../../search.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-manager',
  templateUrl: './search-manager.component.html',
  styleUrls: ['./search-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchManagerComponent implements OnInit {
  
  isButtonDisabled: boolean = true;
  searchQuery: string = null;

  constructor(
    private SearchService: SearchService,
    private router: Router,
    // private LoaderService: LoaderService
  ) { }

  ngOnInit() {
    // this.LoaderService.show();
  }

  private fetchUsers(user) {
    this.router.navigate(['/search-results'], { queryParams: {user, page: 1} });
  }

  triggerSearch() {
    this.fetchUsers(this.searchQuery);
  }

  observeInput(searchString) {
    this.searchQuery = searchString;
    if(searchString !== '') {
      this.isButtonDisabled = false;
    }else {
      this.isButtonDisabled = true; 
    }
  }

}
