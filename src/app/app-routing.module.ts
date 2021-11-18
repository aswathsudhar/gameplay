import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerGuardGuard } from './Player-Guard-Redirect/player-guard.guard';
import { RedirectGuardGuard } from './Player-Guard-Redirect/redirect-guard.guard';
import { PointsTableComponent } from './points-table/points-table.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component: HomeComponent,
    canActivate : [PlayerGuardGuard]
  },
  {
    path : 'playgame',
    component: PlayGameComponent,
    canActivate: [RedirectGuardGuard]
  },
  {
    path : 'pointstable',
    component: PointsTableComponent
  },
  {
    path : 'playersdetails',
    component: PlayerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
