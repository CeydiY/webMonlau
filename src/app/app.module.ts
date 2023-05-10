import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BodyComponent } from './body/body/body.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { TeamComponent } from './team/team/team.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { ContactComponent } from './contact/contact/contact.component';
import { app_routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    GalleryComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
      app_routing
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
