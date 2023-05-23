import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home/home.component";
import {TeamComponent} from "./team/team/team.component";
import {GalleryComponent} from "./gallery/gallery/gallery.component";
import {ContactComponent} from "./contact/contact/contact.component";

const app_routes: Routes = [
  { path: 'inicio', component: HomeComponent},
  { path: 'equipo', component: TeamComponent},
  { path: 'fotos', component: GalleryComponent},
  { path: 'contacto', component: ContactComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

export const app_routing = RouterModule.forRoot(app_routes);
