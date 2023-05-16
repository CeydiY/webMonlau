import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  frontEnd = [
    {
      img: 'assets/img/home/HTML.png',
      p: "Interdum habitant dapibus iaculis lacinia purus dui, nullam condimentum metus ante vehicula curabitur, nulla senectus parturient donec nisi.",
      link: "https://www.w3schools.com/html/"
    },
    {
      img: 'assets/img/home/Angular.png',
      p: "Interdum habitant dapibus iaculis lacinia purus dui, nullam condimentum metus ante vehicula curabitur, nulla senectus parturient donec nisi.",
      link: "https://angular.io/docs"
    },
    {
      img: 'assets/img/home/React.png',
      p: "Interdum habitant dapibus iaculis lacinia purus dui, nullam condimentum metus ante vehicula curabitur, nulla senectus parturient donec nisi.",
      link: "https://legacy.reactjs.org/docs/getting-started.html"
    }
  ]
  banckEnd =[
    {
      img: 'assets/img/home/PHP.png',
      p: "Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.",
      link: "https://www.php.net/docs.php"
    },
    {
      img: 'assets/img/home/javascript.png',
      p: "Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      img: 'assets/img/home/java.jpg',
      p: "Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.",
      link: "https://dev.java/learn/"
    }
  ]


  ngOnInit(){
    this.typeWriter();
  }

  typeWriter() {
    let words = ['M06', '2º Daw', 'Monlau', 'Developers', 'Web Designers'],
      wordWrapper = document.getElementById('word')!,
      wordWrapperContent = wordWrapper.innerHTML,
      addingWord = false,
      counter = 1;
    setInterval(function(){
      if(wordWrapperContent.length > 0 && !addingWord ) {
        wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
        wordWrapperContent = wordWrapper.innerHTML;
      } else {
        addingWord = true;
      }
      if( addingWord ){
        if( wordWrapperContent.length < words[counter].length  ) {
          wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
          wordWrapperContent = wordWrapper.innerHTML;
        } else {
          if( counter < words.length) {
            counter ++
          }
          addingWord = false;
        }
      }
      if( counter == words.length) {
        counter = 0;
      }
    }, 200);
  };

}
