import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './inmemory.service';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details.component';
import { ListComponent } from './list.component';
import { ErrorComponent } from './error.component';

import { HolopService } from './holop.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryService),
    RouterModule.forRoot([
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'add',
        component: DetailsComponent
      },
      {
        path: 'edit/:id',
        component: DetailsComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent,
    ErrorComponent
  ],
  providers: [
    HolopService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
