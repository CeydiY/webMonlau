import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  team = [
    {
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      nombre: 'Josefina',
      primerApellido: 'López',
      segundoApellido: 'Gónzalez',
      edad: '23',
      cumple: '12-02-2000',
      email: 'tuemail@hotmail.com',
      pais: 'España',
      linkedin: 'https://es.linkedin.com',
      github: 'https://github.com/'
    }
  ]

}
