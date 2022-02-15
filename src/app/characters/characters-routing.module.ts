import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersResolver } from './resolvers/characters.resolver';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent,
    resolve: { characters: CharactersResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
