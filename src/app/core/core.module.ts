import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { SidenavComponent } from './components/structure/sidenav/sidenav.component';
import { NavigationComponent } from './components/structure/navigation/navigation.component';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  declarations: [SidenavComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,
    // a
  ],
})
export class CoreModule {}
