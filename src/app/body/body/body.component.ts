import {Component, OnInit, ViewChild} from '@angular/core';
//import Typewriter from 't-writer.js'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements  OnInit{
  i = 0;
  txt = "DAW";
  speed = 150;

  ngOnInit(){
    this.typeWriter();
  }


 typeWriter() {
    if (this.i < this.txt?.length) {
      console.log(this.txt?.length)
      document.getElementById("demo")!.innerHTML += this.txt.charAt(this.i);
      console.log(this.txt.charAt(this.i));
      this.i++;
      console.log(this.i++)
      setTimeout(this.typeWriter, this.speed);
    }
  };





}



