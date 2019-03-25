import { LoaderService } from './../../../shared/components/loader/loader.service';
import { Profile } from './../../../model/search.model';
import { SearchService } from './../../search.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {
  
  @Input() profile:any;
  userProfile: Profile;

  constructor(
    private SearchService: SearchService,
    private cdRef: ChangeDetectorRef,
    private loader: LoaderService
  ) { }
  
  ngOnChanges(change) {
    if(change) {
      this.loadOtherDetails(change.profile.currentValue);
    }
    
  }

  ngOnInit() {
    this.loadOtherDetails(this.profile);
  }

  private loadOtherDetails(profile) {
      this.SearchService.loadProfileDetails(profile).subscribe(
        data => {
        this.loader.hide();
        this.userProfile = {...data};
        this.cdRef.detectChanges();
      },
      err => {
        console.log('error Occurred');
        this.loader.hide();
      }
      )
  }

}
