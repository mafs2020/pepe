import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/components/structure/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: NavigationComponent,
        // children: [
        //   {
        //     path: '',
        //     loadChildren: () =>
        //       import('./characters/characters.module').then(
        //         (m) => m.CharactersModule
        //       ),
        //   },
        // ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
