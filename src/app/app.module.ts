import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {GitsearchService} from './Gitsearch/gitsearch.service';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { RepositoryDisplayComponent } from './repository-display/repository-display.component';
import { RepositorySearchbarComponent } from './repository-searchbar/repository-searchbar.component';
import { UserComponent } from './user/user.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { DatePipePipe } from './date-pipe.pipe';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
  { path: 'Users', component: UserSearchComponent},
  { path: 'Repos', component:  RepositorySearchbarComponent},
  { path: 'user/:uname', component:  UserComponent},
  { path: '', redirectTo: 'user/Desiree-Mmasi',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RepositoryDisplayComponent,
    RepositorySearchbarComponent,
    UserComponent,
    UserDisplayComponent,
    UserSearchComponent,
    DatePipePipe,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }