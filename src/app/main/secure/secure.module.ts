import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { RankingsComponent } from './rankings/rankings.component';
import { StatsComponent } from './stats/stats.component';
import { SecureComponent } from './secure.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProfileComponent,
    RankingsComponent,
    StatsComponent,
    SecureComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SecureModule { }
