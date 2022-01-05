import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountPipe } from './Pipes/count.pipe';
import { MainControlComponent } from './Components/main-control/main-control.component';
import { NavComponent } from './Components/nav/nav.component';
import { QuoteComponent } from './Components/quote/quote.component';
import { QuoteDetailsComponent } from './Components/quote-details/quote-details.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormComponent } from './Components/form/form.component';
import { BackgroundDirective } from './Directives/background.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountPipe,
    NavComponent,
    MainControlComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    FooterComponent,
    FormComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
