import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PostComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
