//////string manipulation:
let s1="Hello!"
let s2="This is javascript"
let s3=s1+s2
console.log(s3)

///accesing using index
let s4="lucky"
console.log(s4[3])
console.log(s4[0])
console.log(s4[6])//index out of the range it gives o/p as undefined


///finding length of the string
const s5="rainbow is beautiful:)"
let length=s5.length
console.log(`length of "${s5}" is ${length}`)

///slicing
const s6="this is rainy season"
console.log(s6.slice(0,12))
console.log(s6.slice(14))
console.log(s6.slice(-13)) //printing from ending

///////template literals:

//single line
let Name = "K.R.V.V.Lakshmi"
let dept ="cse"
let clgName="anits"
console.log(`this is ${Name} pursuing ${dept} in ${clgName}`)

//multi line
let manument ="tajmahal";
let built = 1648;
let king = "shahjahan";
let symbol ="love";
let place ="agra";

let about=`${manument} is a very famous tourist place
   it was built in ${built} by ${king}
   which is a symbol of ${symbol} located at ${place}`
console.log(about);