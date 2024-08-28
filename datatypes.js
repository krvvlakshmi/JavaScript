
///////datatypes

let roll=102094;
let name='K.R.V.V.Lakshmi';
let is_student=true;
let year;
let college=null;
console.log(`roll=${roll} - ${typeof roll}`);
console.log(`name=${name} - ${typeof name}`);
console.log(`is_student=${is_student} - ${typeof is_student}`);
console.log(`${typeof year}`);
console.log(typeof college);


//////creating an object
const person={
    sname :"suchitha",
    sno : 46,
    is_student:true,
    age:20,
    cgpa:9.5,
    friends:['sukanya','likitha','bharathi'],
    about:function()
    {
      console.log(`${this.sname} roll.no is ${this.sno} whose age is ${this.age} having cgpa ${this.cgpa}`);
    }
};
console.log(person);

//accessiong properties
console.log(person.sno),
console.log(person.friends[1]);
console.log(person['is_student']);

//accessing methods
person.about();

//modifying property values
person.cgpa=9.8;
person.age=22;
console.log(person);
