import { ShowErrorService } from './shared/components/show-error/show-error.service';
import { Subject } from 'rxjs/Subject';
import { LoaderService } from './shared/components/loader/loader.service';
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private unsubscribe = new Subject<void>();
  isLoading: boolean;
  showError: boolean;

  constructor(private loaderService:LoaderService, private ShowErrorService:ShowErrorService, private router: Router  ){

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  
  trackNavigation() {
    this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        this.ShowErrorService.hide();
        // Hide loading indicator
    }
  });
  }
  ngOnInit() {

    this.trackNavigation();

    this.loaderService.LoaderStream$.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(loader => {
      setTimeout(() => {
        loader ? this.isLoading = true : this.isLoading = false;
      });
    });

    this.ShowErrorService.ErrorStream$.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(error => {
      setTimeout(() => {
        error ? this.showError = true : this.showError = false;
      });
    });
  }
}
