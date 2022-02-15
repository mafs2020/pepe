import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterService } from './services/character.service';
import { CharactersResolver } from './resolvers/characters.resolver';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, CharactersRoutingModule],
  providers: [CharacterService, CharactersResolver],
})
export class CharactersModule {}
