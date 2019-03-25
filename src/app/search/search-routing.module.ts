import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const containers = [fromContainers.SearchManagerComponent];

const routes: Routes = [
    {
        path: '',
        component: fromContainers.SearchManagerComponent
    },
    {
      path: 'search-results',
      component: fromContainers.SearchResultsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
