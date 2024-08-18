import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLinkActive } from '@angular/router';
import { UserDetailsComponent } from './user-deatils/user-deatils.component';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BtnupComponent } from './btnup/btnup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    DetailsComponent,
    SearchPipe,
    BtnupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
