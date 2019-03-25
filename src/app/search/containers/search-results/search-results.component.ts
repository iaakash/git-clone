import { LoaderService } from './../../../shared/components/loader/loader.service';
import { SearchService } from './../../search.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {
  currentUser: string;
  profiles_data: any;
  appState = {
  };

  constructor(
    private route: ActivatedRoute,
    private SearchService: SearchService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private loader: LoaderService
  ) { }

  ngOnInit() {
      this.loader.show();
     this.fetchParamsAndLoadUsers().subscribe(data => {
      //this.loader.hide();
      this.profiles_data = {...data};
      this.cdRef.detectChanges();
    })
 
  }
  
  private loadUsers() {
    return this.SearchService.fetchUsers(this.appState);
  }

  private fetchParamsAndLoadUsers(): Observable<any> {
    return this.route.queryParams.pipe(
      // map(params => params.user),
      switchMap(params => {
        this.appState['user'] = params.user;
        this.appState['page'] = params.page;
         return this.loadUsers();
      })
    )
  }

  onPaginate(page) {
    this.appState['page'] = page;
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: { page },
        queryParamsHandling: "merge"
      });
    this.profiles_data = this.loadUsers();
  }

}
