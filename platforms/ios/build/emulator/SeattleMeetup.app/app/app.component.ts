import { Component } from '@angular/core';
var pdfPlugin = require('nativescript-pdf');

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public createPDF() {
    let pdf = new pdfPlugin.TNSPdf();
    pdf.make('Seattle Angular Meetup!');
  }
}