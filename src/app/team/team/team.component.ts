import {Component, OnInit} from '@angular/core';
import {Students} from "../../interfaces/Students";
import {HttpErrorResponse} from "@angular/common/http";
import {StudentServiceService} from "../../student-service.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  listStudents: Students[] = [];
  constructor(private studentService: StudentServiceService) {
  }
  ngOnInit(): void {

  }
  team = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg',
      nombre: 'Josefina',
      primerApellido: 'López',
      segundoApellido: 'Gónzalez',
      edad: '23',
      cumple: '12-02-2000',
      email: 'tuemail@hotmail.com',
      pais: 'España',
      linkedin: 'https://es.linkedin.com',
      github: 'https://github.com/'
    },{
      img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg',
      nombre: 'Josefina',
      primerApellido: 'López',
      segundoApellido: 'Gónzalez',
      edad: '23',
      cumple: '12-02-2000',
      email: 'tuemail@hotmail.com',
      pais: 'España',
      linkedin: 'https://es.linkedin.com',
      github: 'https://github.com/'
    },{
      img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg',
      nombre: 'Josefina',
      primerApellido: 'López',
      segundoApellido: 'Gónzalez',
      edad: '23',
      cumple: '12-02-2000',
      email: 'tuemail@hotmail.com',
      pais: 'España',
      linkedin: 'https://es.linkedin.com',
      github: 'https://github.com/'
    },{
      img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg',
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
  ];
  /*
  listClients(){
    this.studentService.getClients().subscribe(
      (response: Students[])=>{
        this.listStudents = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }

  filterList(key: string) {
    const results: Students[] = [];
    for (const client of this.listStudents) {
      if (client.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || client.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || client.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(client);
      }
    }
    this.listStudents = results;
    if (results.length === 0 || !key) {
      this.listStudents();
    }

  }
*/
}
