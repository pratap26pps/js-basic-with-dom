console.log('pankaj pratap singh')
// variables and constant
let a=5;
console.log(a)

a='pankaj';
console.log(a)     //it shows in js, a is dynamic typed due to it can be num and then string

const  num=7;
console.log(num)

let A=7;
let b=2;
console.log(A%b)

// ternary operator
let age1 =20;
let status =(age1>=18)?"elisible":"not";
console.log(status);
// num=3;
// console.log(num)

// oject(properties,behaviour) ,oops(object oriented programming)
// properties ko keys bol sakte hai aur behaviour ko method
// let student={
//      age : 21,
//      height:6,

// behaviour of object can be add by function  it is called method 
    //  draw: function() {          
//         console.log('pankaj pratap singh');
//      }
// };


// factory faction is used because many objects are formed

function rectangle(){       /*function define */
    return student={         /*object */
        age:23,
        class:12,              /* properties*/

        draw(){
            console.log('your name is rohan');     /*method */
        }
    };
}
let rectangleobj1= rectangle();       /* function call*/



function square(a,c){       /*function define */
    return student={         /*object */
        age:a,
        class:c,              /* properties*/

        draw(){
            console.log('your name is rohan');     /*method */
        }
    };
}   
let rectangleobj=square(25,12);      /* function call*/
let pankaj2 =square(4,7)

// constuctor function

 function triangle(){
    this.base=5;
    this.height=7;
    this.draw=function(){
        console.log('making triane');
    }
 }
 let store= new triangle();
//  add new properties
  store.color='yellow';
  console.log('store');


//   deletion of properties of object
  delete store.base;
  console.log('store');

//   primitives types 
let age=6;
let bank=age;
a++;
console.log(age);
console.log(bank);

// refrence type 
let abc={value:10};
let dec=abc;
abc.value++;
console.log(abc);
console.log(dec)

//for -of
let rectangle1 ={
    length:5,
    breath:6
}
for(let key in rectangle1){
    // console.log(key);
    console.log(key,rectangle1[key]);
}

for(let key of Object.keys(rectangle1)){
     console.log(key);
}

// whether keys are present or not (check)
if('length' in rectangle1){
    console.log('present');
}
else{
    console.log('absent');
}



let as='babber';
let message = `pankaj ${as}    
      singh
      is   my name
      okay`;
      console.log(message);

let date =new Date();
console.log(date);


// arrays
let number=[3,4,6,8,2];
console.log(number);

//remove last element of array
number.pop();
console.log(number);

number=[];
console.log(number);

number.lenght=0;
console.log(number);

// combining the element of two array in one array by concat
let sun=[2,5,4,7,9];
let wax=[1,3,6,8];
//spread over
let combine=[...sun,...wax];
console.log(combine);

// let combined=sun.concat(wax);
//console.log(combined);

let slice=sun.slice(1,3);
console.log(slice);

// try and catch =>error handling
let person={
    firstname:'pankaj',
    lastname:'singh',


};
try{
    person.lastname=pratap;
}
catch (e){
    alert('you have send a number in last name');
}
console.log(person.lastname);


//q=1 get a number from user and tell the number is multiple of 5 or not at console
// const userinputs=prompt("enter any number");

// if(userinputs%5==0){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

//q=2 print all the even number b/t 0 to 100 

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


let courses =[
    {no:1, name:'pankaj'},
    {no:2, name:'singh'}
];
// console.log(courses);

let course =courses.find(course=>course.name==='pankaj');
console.log(course);


//for each and find  me  callback function dena hota hai
let arr = [2,4,6,1,9];

// arr.forEach(function (number) {
//     console.log(number);
// });

// or  use array function

arr.forEach( (number)=>  console.log(number));

//map function

// let box= arr.map(function(value){
//     return 'student no'+value;
// });

let box= arr.map((value)=> 'student no'+value);


console.log(box);


let array=[2,-4,-5,7,-2,8];
console.log(array.indexOf(8));

array.forEach(key => {
    if(key>=0){
        console.log(key);
    }
});

// filter ke ander predicate function
let pankaj1=array.filter(value =>value>=0);

// console.log(pankaj1);

// let sohan1=pankaj1.map(function(num){
//     let mohan={value : num};
//     return mohan;
// })

// let sohan=pankaj1.map(num=>  {value : num} );


// // cheeni method 
// let pankaj2=array
//                  .filter(value =>value>=0)
//                  .map(num=>{value : num});


// lecture 4
// function declaration  argument pass as input
// function defition
// function call   parameter pass as input

// function walk(){
//     console.log("walking ");
// };

// walk();


// function assignment

// named function assignment and annonymous function assignment(name of  function not declaired)

// we cannot declaration at top the function defition 
// hoisting is applicable for function declaration not for function assignment

// car();

// let car=function run(){
//     console.log("running");
// };

// car();
// we cannot access due to assignment
// run();
  

function js(a,b){
    console.log(arguments)
    return a+b;
}
// console.log(js(1,5));

// arguments of function used for multiple of parameter
// function js(){
//     let total=0;
//     for(let value of arguments)
//     total =total+value;
//     return total;
// }
// let ans =js(2,4,7);
// console.log(ans);

// rest operator 
function js( value,num,pankaj,...args){
    console.log(args);
}

js(2,6,12,5,111);

// Getter Setter

let person1={
    lname:'singh',
    fname:'sohan',
    get sname(){
        return `${person1.fname}  ${person1.lname}`
    },
    set sname(value){
        // if(typeof value!==String){
        //     throw new Error("you have send a new string");
        // }
        let parts= value.slice(' ');
        this.fname=parts[0];
        this.lname=parts[1];

    }
}; 

// try{
//    person1.sname=true;
// }
// catch(e){
//     alert(e);
// }

// function lname(){
//     return `${person1.fname}  ${person1.lname}`
// }

// console.log(person1.sname);

person1.sname='dheeraj kumar';
console.log(person1.sname);



// reducing an array
let arr3=[2,4,6,8,12];

let total=0;
for (let value of arr3){
    total=total +value;

}
console.log(total);

// reducing in these way
// accumulator is a call back function and it is initialising with 0
let total1=arr3.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);

console.log(total1);



// your js basic complete now ,kindly revise it cd
















// // adding 100 para
//  const t1 =performance.now();
// for(let i=1;i<=100;i++){
//    let newElement=document.createElement('p'); 
//    newElement.textContent='this is new para'+i;

//    document.body.appendchild(newElement);
// }


// const t2 =performance.now();
// console.log("this took"+(t2)+"ms");

//optimising into a bit
let myDiv=document.createElement('div');

for (let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='this is new para'+i;

    myDiv.appendChild( newElement );
}
document.body.appendChild(myDiv);



// let fragment = document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//        let newElement=document.createElement('p');
       
//        newElement.textContent='this is new para'+i;
//        fragment.appendChild(newElement);
//     }
// document.body.appendChild(fragment);
 


// function para(){
//     let element=document.createElement('p');
//     element.textContent='my name is pankaj';
//     document.body.appendChild(element);
// }

// function appendNewMessage(){
//     let element=document.createElement('p');
//     element.textContent='kya haal chaal';
//     document.body.appendChild(element);
// }

// para();
// appendNewMessage();


let newPara =new Promise((resolve, reject)=> {
    setTimeout(function(){
    console.log('kya thik hai sabhi'); 
    },5000);
    resolve(345);
     reject(new error);
    
});

newPara.catch((error) => {console.log("kyu error hai")});
console.log('sab badhiya');

async function Abcd(){
    return "kya huwa tera";
}

// let pankaj=document.querySelector('.yaar');

// function car(){
//     pankaj.style.color='red';
    
// }


// document.addEventListener('click',car);
// document.removeEventListener('click',car());


let pankaj=document.createElement("div");

pankaj.className="cat";
console.log(pankaj.outerHTML);

pankaj.classList.remove("cat");
pankaj.classList.add("rohan");

pankaj.classList.toggle("mat");
console.log(pankaj.outerHTML);










