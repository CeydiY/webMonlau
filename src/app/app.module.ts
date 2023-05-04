import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BodyComponent } from './body/body/body.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AngularTypewriterEffectModule } from "angular-typewriter-effect";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AngularTypewriterEffectModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
