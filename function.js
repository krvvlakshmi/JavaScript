///////function : it is a reusable block of code.

////function declaration
 function display1()            //function definition
 {
    console.log("this is display function");
 }
 display1(); //function call

 ////arrow function
 const display2 =()=>
 {
    console.log("this is display arrow function");
 }
 display2();

 ////anonymous function
 const display3=function()
 {
    console.log("this is display anonymous function");
 }
 display3();



 ///////function expression
 const average=function(maths,sci,eng,soc)
 {
    let avg=(maths+sci+eng+soc)/4;
    console.log(`average marks:${avg}`)
 }
 let maths_marks=98;
 let science_marks=95;
 let english_marks=85;
 let social_marks=90;
 average(maths_marks,science_marks,english_marks,social_marks);


 ////////passing parameters into function
 function details(Id,name,exp,sal)
 {
    reward=(sal*20)/100;
    console.log(`${name} whose ID is ${Id} has ${exp} years of experience and get ${sal} per month and ${reward} for his work`);
 }
 let empId="1019203";
 let empName="poornima";
 let experience=10;
 let salary = 60000;
 details(empId,empName,experience,salary);



 /////////default parameters
 function print(rno,name,dept,clg="anits")   //here clg is default parameter
 {
    console.log("Roll no:"+rno+"\n"+"Name:"+name+"\n"+"Department:"+dept+"\n"+"College:"+clg);
 }
 print("221265","Ravi","CSE");



 /////////return statement
 function percentage(o,c,d,j,p)
 {
    let prt=((o+c+d+j+p)/500)*100;
    return prt;
 }
 let os=98,cn=90,dbms=94,java=95,psqt=97;
 percent=percentage(os,cn,dbms,java,psqt);
 console.log(percent);



 ////////chain function
 function sum(array)
 {
    let sum=0;
    for(let i=0;i<array.length;i++)
        sum=sum+array[i];
    return sum;
 }
 function div(sum,n)
 {
    let q=sum/n;
    return q;
 }
 let arr=[5,10,15,20,25];
 let mean=div(sum(arr),arr.length);
 console.log(mean);
 