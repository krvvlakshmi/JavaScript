/////If-else

let your_age=27;
if(your_age>=18)
    console.log("you are eligible to vote");
else
console.log("you are not eligible to vote");

//////nested if

let n1=43,n2=45,n3=49;
if(n1>n2)
{
    if(n1>n3)
        console.log(`${n1} is greater`)
    else
        console.log(`${n3} is greater`);
}
else if(n2>n3)
console.log(`${n2} is greater`);
else
console.log(`${n3} is greater`);

//////else-if ladder

let x1 = -3;
let y1 = 4;
if(x1>0 && y1>0)
    console.log("Quadrant-1");
else if(x1<0 && y1>0)
    console.log("Quadrant-2");
else if(x1<0 && y1<0)
    console.log("Quadrant-3");
else if(x1>0 && y1<0)
    console.log("Quadrant-4");
else
    console.log("origin");


//////switch case
let food = "birayni"
switch(food)
{
    case "pizza":console.log(`${food} has 300 calories`);
                 break;
    case "burger":console.log(`${food} has 350 calories`);
                  break;
    case "chips":console.log(`${food} has 280 calories`);
                 break;
    case "salad":console.log(`${food} has 200 calories`);
                  break;
    default:console.log(`${food} is not available:(`)
}