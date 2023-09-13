import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NgCircleProgressModule, CircleProgressOptions } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      animationDuration: 1300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
