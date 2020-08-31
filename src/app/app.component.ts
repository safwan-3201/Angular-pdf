import { Component } from '@angular/core';
//import * as jsPDF from 'jspdf';

import jsdPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pdf';

  // constructor(){
  //   this.downloadPDF();
  // }

  downloadPDF() {
    console.log(jsdPDF);
    const doc = new jsdPDF();
    console.log(doc);
    doc.text('Welcome To Carwow \n This is a bloody invoice \n Best Car Buying Site***', 10, 10);
    doc.save('a4.pdf');
  }


}
