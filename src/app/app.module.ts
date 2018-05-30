import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
        { path: '', redirectTo:'/login', pathMatch: 'full'
        },
        { path: 'login', component: LoginComponent
        },
        { path: 'navbar',
        component: NavbarComponent
        }
      ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AlertModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
