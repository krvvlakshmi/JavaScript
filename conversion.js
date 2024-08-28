/////////type conversion and coercion:-

const input_year='2005'
console.log(Number(input_year));

/////explicit conversion

const num=prompt("enter a number"); //converting string to number
console.log(parseInt(num))

const n=10;  //converting number to string
m=String(n);
console.log(m);
console.log(typeof(m));

const number=true;
console.log(Boolean(number)); //converting to boolean



/////implicit conversion
const num1 = '6'
const num2 = 9
console.log(num1+num2) //string concatenation
console.log(num1-num2) //subtraction
