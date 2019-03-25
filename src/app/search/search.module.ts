import { SearchRoutingModule } from "./search-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {NgxPaginationModule} from 'ngx-pagination'
import * as fromContainers from "./containers";
import * as fromComponents from "./components";

const containers = [
  fromContainers.SearchManagerComponent,
  fromContainers.SearchResultsComponent
];
const components = [
  fromComponents.SearchButtonComponent,
  fromComponents.SearchInputComponent,
  fromComponents.UserProfileComponent,
  fromComponents.ProfileListComponent
];

@NgModule({
  declarations: [...containers, ...components],
  imports: [CommonModule,NgxPaginationModule, SearchRoutingModule]
})
export class SearchModule {}
