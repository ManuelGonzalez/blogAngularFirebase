import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule  } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { InformacionService } from './services/informacion.service';
import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShareComponent } from './components/share/share.component';

const appRoutes:Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'home',
    component: BodyComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      /*
      {
        path: ':name',
        component: UserComponent
      }
      */
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBgXJ4VdUxkqcAPReUh4vc4yNpOMH3OMHY",
    authDomain: "ifblogger-4096c.firebaseapp.com",
    databaseURL: "https://ifblogger-4096c.firebaseio.com",
    projectId: "ifblogger-4096c",
    storageBucket: "ifblogger-4096c.appspot.com",
    messagingSenderId: "459984303614"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PostComponent,
    DashboardComponent,
    NotFoundComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [InformacionService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
