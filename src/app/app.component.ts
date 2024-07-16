import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personObj = {
    username: 'Bini Babu', 
    age: 24
  }
  incrementAge(){
    // this.personObj.age = this.personObj.age +  1;// this code will not trigger ngOnChanges
    this.personObj = {       
      ...this.personObj, 
      age: this.personObj.age + 1         
    };  // this code will  trigger ngOnChanges because new reference of object is assigned
    // this.personObj = Object.assign({},this.personObj, {age: this.personObj.age + 1}); // this code will  trigger ngOnChanges because new reference of object is assigned
  }
}
