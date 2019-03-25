import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { RouterModule } from '@angular/router';

const components = [fromComponents.LoaderComponent, fromComponents.ShowErrorComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...components]
})
export class SharedModule { }
