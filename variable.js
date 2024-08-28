
//var keyword
var fullName = "rama venkata varaha lakshmi";
var lastName = "kosuru";
var age = 19;
console.log(`fullName=${fullName}`);
console.log(`lastName = ${lastName}`);
console.log(`age=${age}`);


//let keyword
let fn = "rama venkata varaha lakshmi";
let ln = "kosuru";
let age1 = 19;
console.log(`fullName=${fn}`);
console.log(`lastName = ${ln}`);
console.log(`age=${age1}`);


//const keyword
const f="rama venkata varaha lakshmi";
const l="kosuru";
const age2=19;
console.log(`fullName=${f}`);
console.log(`lastName = ${l}`);
console.log(`age=${age2}`);

//global and local functions
let x=10;
function outfunction()
{
    let x=20;
    function infunction()
    {
        let x=30;
        console.log("local inner x value is:",x);
    }
    infunction();
    console.log("local outer x value is:",x);
}
outfunction();
console.log("global x value is:",x);

//scope of variables
var v=10;
if (true)
{
    var v=20;
}
let y=10;
if(true)
{
    let y=20
}
const z=10;
if(true)
{
    const z=20;
}
console.log(v);
console.log(y);
console.log(z);
