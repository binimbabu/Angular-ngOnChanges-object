ngOnChanges can be used in the component where we use @Input() in the component

export class AppComponent {
  personObj = {
    username: 'Bini Babu', 
    age: 24
  }
  incrementAge(){
    this.personObj.age = this.personObj.age +  1;
  }
}



app.component.html

<app-child [personInfo]="personObj"></app-child>
<button (click)="incrementAge()">Increment Age</button>

child,component.ts

export class ChildComponent implements OnChanges{
 @Input() personInfo:any;

  ngOnChanges(changes: SimpleChanges): void {
   console.log("Changes", changes);
  }
}



child.component.html

<p>Username : {{personInfo.username}}</p>
<p>Age : {{personInfo.age}}</p>




Here the ( ngOnChanges(changes: SimpleChanges): void {  } ) will not work when age increments because  the below code 

 incrementAge(){
    this.personObj.age = this.personObj.age +  1;
  }


does not create a new object and just updates the property age directly, this issue can be resolved by assigning new object and when value changes then new object creates as shown below


 incrementAge(){
    this.personObj = {
      ...this.personObj, 
      age: this.personObj.age + 1
    };
  }


thus updating app.component.ts as follows

export class AppComponent {
  personObj = {
    username: 'Bini Babu', 
    age: 24
  }
  incrementAge(){
      this.personObj = {
      ...this.personObj, 
      age: this.personObj.age + 1
    };
  }
}




Console Output when clicking the 'Increment Age' button

Changes 
{personInfo: SimpleChange}
personInfo
: 
SimpleChange
currentValue
: 
{username: 'Bini Babu', age: 25}
firstChange
: 
false
previousValue
: 
{username: 'Bini Babu', age: 24}
[[Prototype]]
: 
Object
[[Prototype]]
: 
Object




Whenever we want to update any value inside the object/ inside an array then create new array/ new object using a spread operator and add a new reference to the object with the update value.( like below)

 this.personObj = {
      ...this.personObj, 
      age: this.personObj.age + 1
    };

This is because ngOnChanges will not check the value change , it will only check the reference change ( then only ngOnChange will trigger).

Below code also can be used to trigger ngOnChanges by creating a new reference of object

incrementAge(){
    this.personObj = Object.assign({},this.personObj, {age: this.personObj.age + 1});
  }