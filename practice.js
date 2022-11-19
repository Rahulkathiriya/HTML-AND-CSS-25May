
// var isFunction = function (a, b) {
//     return total = a * b;
// }
// console.log("The multiplication of two number is " + isFunction(200, 100));


// for (var i = 1; i <= 10; i++) {
//     let tableOf = 12;
//     console.log(` ${tableOf} * ${i} = ${tableOf * i}`);
// }


// const sum = () => {

//     let a = 10;
//     let b = 20;
//     let sum = a + b;
//     return ` The sum of two number is ${sum}`;
// }

// console.log(sum());

// const noReturn = () =>

//     `The multiplication of two number is  = ${(a = 5) * (b = 6)}`

// console.log(noReturn());


// let isArray = ['Rahul', 'Ravi', 'paras', 'Manoj'];

// console.log(isArray[isArray.length - 1]);  // last index element find...... using this

// console.log(isArray[0]);
// console.log(isArray[1]);
// console.log(isArray[2]);
// console.log(isArray[3]);

// FOR IN LOOP

// for (let element in isArray) {     get only index number
//     console.log(element);
// }

// // FOR OF LOOP

// for (let allArray of isArray) {    get element using forOf loop
//     console.log(allArray);
// }


// isArray.forEach((element, index, array) => {
//    console.log(`${element} = Index : ${index} = ${array}`);   // value with index positon
// });


// const animal = ['pigs', 'dogs', 'cats', 'ret'];
// console.log(animal);

// animal.push('lion');   add value in array

// console.log("afther pushing new element array is : ");

// console.log(animal);

// const count = animal.unshift('chiken');   add value in starting position

// console.log(animal);


/* const myNumber = [1, 2, 3, 5];
   console.log(myNumber.unshift(4, 6));  //  add value at starting position
   console.log(myNumber);  */

// ============================================================

//   SORT ARRAY


// const myArray = [1, 5, 3, 2, 6, 7, 4];
// console.log(myArray.sort());


// ================================================

//  3.includes method()

// const myArray = [1, 5, 3, 2, 6, 7, 4];    // <<== return true value meance boolean value
// console.log(myArray.includes(5));

// ================================================

// Array.find(); method  <<== pass callbackFunction;

// const prices = [200, 300, 350, 390, 400, 450, 500, 550, 600];
// condition = prices < 400;
// let findValue = prices.find((currentElement) => currentElement < 400);
// console.log(findValue);     // <<= return only one true value or
// if value not satisefies return undefind

//  Array.findINdex();

// const prices = [200, 300, 350, 390, 400, 450, 500, 550, 600];
// let findIndex = prices.findIndex((Element) => Element > 200);
// console.log(findIndex);  // if comdition not satisfies return -1 value otherwise return element index number

// ========================================================================

// 👉👉  Array.Filter() method;

// condition = prices <400;   filter method give all satisfies value
// and return new array,if condition not satisfied filter method return empty array.

// const prices = [100, 200, 300, 400, 500, 600, 700, 800];
// let isFilterMethod = prices.filter((element, index) => element < 400);
// console.log(isFilterMethod);

// ========================================================================

// 3. compair array and sort() array

// const month = ['jan', 'feb', 'dec', 'march'];
// console.log(month.sort());



//  prototype.pop [ what is pop ]
//  --> remove the last elements like data and return the elements. and change the length of array.


// const plants = ['Broccoli', 'cauliFolower', 'kale', 'Tometo', 'Cabbage']


// console.log(plants);
// console.log("======= Remove Last Element =======");
// console.log(plants.pop());
// console.log("==============================");
// console.log(plants);

// ============================================================


// prototype.shift()  <-- remove first elements and retuen it.

// const plants = ['Broccoli', 'cauliFolower', 'kale', 'Tometo', 'Cabbage']

// console.log(plants);
// console.log("======= Remove First Element =======");
// console.log(plants.shift());
// console.log("==============================");
// console.log(plants);

// ==================================================================================


// CURD OPREATION USING ONE METHOD. <-- [ Array.prototype.splice() Method ]

// const months = ['Jan', 'march', 'April', 'June', 'July'];

// 1. add dec last.

// const newMonth = months.splice( months.length, 0, 'Dec');
// console.log(months);


//  2. What is the return value in the splice() method.

// console.log(newMonth);   // <-- splice method return empty array or deleted element in array


// 3.  update march lowerCase to UpperCase March.

// const indexOfMonth = months.indexOf('Jan');

// if (indexOfMonth != -1) {
//     const newMonth = months.splice(months.length, 0, 'December');
//     const updateMarch = months.splice(indexOfMonth, 1, 'January');
//     console.log(months);
// } else {
//     console.log('No Such data found..');
// }

// 4. delete June in array


// const deletJune = months.indexOf('June');

// if(deletJune != -1)
// {
//     const newMonth = months.splice(months.length, 0, 'December');
//     const updateMonth = months.splice(deletJune,1);  // <-- infinity delet all data
//     console.log(months);
//     console.log(updateMonth);
// }
// else{

//     console.log('No such data found....');
// }


// ==================================================================================


//  Map(), Reduce() and Filter() method  <-- what is this..?

//   1. map()  <--    let newArray = arr.map(Callback[currentValue[, index [, array] ]){
//    return element for new array , after executing somthing }[ , thisArg]);

// const myArray = [1, 16, 9, 4, 25];

// let newArray = myArray.map((element, index, arr) => {

//     return element > 9;
// });

// console.log(myArray);
// console.log(newArray);

//   myArray.forEach() <-- return undefined array
// let newArray = myArray.map((element,index,arr)=>{
//     return ` INdex no = (${index}) and the value is (${element}) belong to ${arr}.`

// });

// console.log(newArray);


//   1. find enter array square root

// let myArray1 = [25, 36, 49, 64, 81];
// let squareRoot = myArray1.map((element) => Math.sqrt(element));

// console.log(myArray1);
// console.log(squareRoot);


// 2. multiply into 2 and return bigger then 10 value ?.

// chaining method();

// let arr = [2, 3, 4, 5, 6];
// let multiArray = arr.map((element) => element * 2).filter((element)=> element >=10).reduce
// ((accumulator,element)=> accumulator *= element);
// console.log(multiArray);


//  What is reduce() method ?.   <-- flatten 3d and 2d arrar convert in singal dimensional array.

/* the reduce method executes a reducer function (that you provide) on each element of the Array,
reulting in singal output value.

The reduce function takes four  arguments:

Accumulator
Current value
Current Index
Source Array */


// let newArray = [ 3,4,5,6,7,8];
// let reduceMethod = newArray.reduce((accumulator , element, index,arr)=> accumulator += element,2);
// console.log(reduceMethod);



//  How to flat(fatten) 3d and 2d array using reduce method ?.



// const array = [
//     ['Rahul', 'Ravi'],
//     ['Ram', 'Ramesh'],
//     ['Rakesh', 'Roshan'],
//     ['Rajesh', 'Renish']
// ];
// let flatArray = array.reduce((accumulator, element) => {
//     return accumulator.concat(element);

// });
// console.log(flatArray);


// ==================================================================================================


//    ===========  STRING IN JAVASCRIPT =============

// 1. Escape character
// 2. finding a string in a string
// 3. Searching a string ina string
// 4. Extracting string parts
// 5. Replecing string content
// 6. Extracting string character
// 7. Other useful method


// let myName = new String('rahul kathiriya');   <-- Create new string using String() <-- constructer
// console.log(myName);


//   Find length  ===  String .prototype.length

// let myName = "Rahul kathiriya";
// console.log(myName.length);

// -->>  👉 Escape Character

// let anySentance = "We are the so-called \"vikings\" from the north.";
// console.log(anySentance);

// -->>  if we use  singal quotes  no needed backslash

// let isSentance = 'We are the so-called "vikings" from the north.';
// console.log(isSentance);

// ============================================================================

//  2. Find String into a string

// const myBioData = 'I am Rahul kathiriya';
// console.log(myBioData.indexOf('Rahul'));

//  -->> last IndexOf()  <<--

// const myBioData = 'I am Rahul kathiriya';
// console.log(myBioData.lastIndexOf('R',6));

// ============================================================================

// 3. Searching a string in a string <<=   position of search String

/*  const myBioData = "My name is Rahul kathiriya";
    const isSearch = myBioData.search("Rahul");
    console.log(isSearch);  */

// ============================================================================

// 4. Extrecting String parts  <<== Using Slice() method.
//  slice() takes 2 parameters like "start" position and  the "end" position.
//  slice(start,end)
//  subString(start,end)
//  substr(start,length)
//  slice() extracts  a part of a String  and returns the extracted part in a new String.


// let str = "Apple, bananaa, kiwi, mango";   // <<=  Apple
// let respons = str.slice(0,5);    //  <<== 01234  if we want full apple we want to enter 1 extra end position
// console.log(respons);

// let minValue = str.slice(7,-2);  // <<= if we enter - value  output is starting position to end of StringArray;
// console.log(minValue);


// =============================================================================================================


//  1. display 280 charachter of a string like the one used in  Twiter..?

// let myTweets = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga pariatur voluptates exercitationem ea eaque inventore dolore? Veritatis natus, ullam cupiditate sit cum quam iste ducimus quis, facere tempora accusantium? Soluta ! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga pariatur voluptates exercitationem ea eaque inventore dolore? Veritatis natus, ullam cupiditate sit cum quam iste ducimus quis, facere tempora accusantium? Soluta";
// console.log("myTweet length is : " + myTweets.length);
// let actualTweet = myTweets.slice(0, 280);
// console.log(actualTweet);
// console.log("actualTweet length is : " + actualTweet.length);

// ==================================================================================================

// 2. The SubString() method  <<= SubString is similer to slice();
//      the difference is that SubString() can not accept negative index;


// let str  = "Apple,kiwi,bananaa";
// let isSub = str.substring(8,-2); // <<== if we enter negative value output is -----
// console.log(isSub);

// ==================================================================================================


// 3. The subStr() method also as same as slice() method

// let str  = "Apple,kiwi,bananaa";
// let isSub = str.substr(-7); // <<== if we enter negative value output is -----
// console.log(isSub)

// ==================================================================================================



// 4. Replacing Stritring content...?    <<= task  <<==
//       ==>> Replace() method throgh <<==

//   String.prtotype.replce(searchFor,replaceWith);
//                         replace data , new Data


// let myBio = "Hello my name is rahul hasmukhbhai kathiriya."
// let replaceValue = myBio.replace('rahul', 'Rahul');
// console.log(replaceValue);

// ==================================================================================================

// 5. Extracting String Characters..?

//   3 method we use :

//   1.charAt(position);       <<==  Return at specific index position character in  a string.
//   2.charCodeAt(position);  <<===
//   3.Property access [];   <<== What is property access..?

//    let str = "Rahul kathiriya";
//    console.log(str.charAt(3));  // <<== Return spacific index value

// =====================================================================================

//  -->> 2.CharCodeAAt();  <<== Return integer value between 0 to 65535;

//    let myBio = "Rahul hasmukhbhai kathiriya";
//    let isUniCode = myBio.charCodeAt(0);
//    console.log(isUniCode);

// =====================================================================================

//  Task ==>>  00. Retuen the unicode of the last character in a string.

// let myName = "Rahul kathiriya";
// // let lastChar = myName.length-1;
// let isUniCode = myName.charCodeAt(myName.length-1);
// console.log(isUniCode);

// =====================================================================================

//   <<==>> Oter usefull method in a String;


//    Propert access [] <<==

// let str= "Rahul kathiriya";
// console.log(str[1]);

// let myName = "Rahul kathiriya";

// let isUpper = myName.toLocaleUpperCase();
// let isLower = myName.toLocaleLowerCase();

// console.log(isUpper);
// console.log(isLower);

// ==>> Concate <<===

// let firstString = 'Rahul';
// let secondString = " Kathiriya";

// let isConcate = firstString.concat(secondString);
// console.log(isConcate);

//  ==>  String.trim();  <<--- Remove WideSpaces

// let trimMethod = "                      Rahul kathiriya                        ";
// console.log(trimMethod);
// console.log(trimMethod.trim());

// ================================================================

//  Convert String into a array using  ==>> split() method  <<==

// let txt = "a,b,c,d,e,f,g,h";  // <<== String

// 3 way to conver strig into a array
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));

// 👉 ============================ DATE AND TIME IN JAVASCRIPT ====================================


//    ==> 4 way to create date() object

// 1. new Data().
// 2. new Data(year, month,day,hours,minutes,seconds,milliseconds),
// 3. new Date(milliseconds).
// 4. new Data(data String).

// let currentDate = new Date();
// // console.log(currentDate);
// console.log(new Date().toLocaleTimeString());       //<<== 9:30:30 PM formet.
// console.log(new Date().toLocaleString());          //<<== 26/8/22,  9:30:30 PM formet.
// console.log(new Date().toString());        // <<=  Fri Aug 26 2022 21:33:09 GMT+0530 (India Standard Time)


// console.log(Date.now());  // january 1 1970 to till date Time milliseconds.

// create date and time

//   Date nad Time both value get using this method.
//    year, month, date ,hour ,minute ,second ,millisecond
// let myBirthDate = new Date(1999, 11, 06, 0, 0, 0);
// console.log("My BirthDate And Time is : " + myBirthDate.toLocaleString());

// //   if you want to get only date you use this method

// let myBirthYearDate = new Date(1999, 11, 06);
// console.log("My BirthDate is : " + myBirthYearDate.toLocaleDateString());  // <<== get only date.

//--> new Date(dateString);

// let isDate = new Date("Decembar 06, 1999 12:00:00");
// console.log(isDate.toLocaleString());


// ->> miliseconds

// let isMiliSecond = new Date(1256585348399);
// console.log(isMiliSecond.toLocaleString());

// ==================================== DATE METHOD() ======================================================

// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());
// console.log(curDate.getHours());
// console.log(curDate.getMinutes());
// console.log(curDate.getSeconds());
// console.log(curDate.getMilliseconds());
// console.log(curDate.getTime());


// -->> how to set indivisual date.

// setFullYear();

// let isDate = new Date();

// let year = isDate.setFullYear(2022);  <<-- return all values in miliseconds
// console.log(year);

// ========================= MATH OBJECTS ===============================


// console.log(Math.PI);   <<-- Math.PI();

// round() <<-- give roundFigure value nearest value;

// let value = 12.2333;
// console.log(Math.round(value));


// Math.pow(); <<==  return pow value like Math.pow(2,3) <<== 2*2*2=8;

// console.log(Math.pow(3, 3));  // OR
// console.log(3 ** 3);

// Math.abs();  <<-- convert negative to positive value;
/* console.log(Math.abs(-33));
   console.log(Math.abs(-55.55));
   console.log(Math.abs(-66)); */


//    Math.ceil(); <<==  return value x rounded value nearest x like value is 12.1 return 13 thrugh ceil method;

// console.log(Math.ceil(4.51));
// console.log(Math.ceil(99.1));

// floor(); <<== using this method return same value before desimal like 12.99 so return this method inly 12;

// console.log(Math.floor(12.99));  // return 12
// console.log(Math.floor(16.89));  // return 16
// console.log(Math.floor(18.79));   // return 18

// Math.min();  <<--  find min value;

// console.log(Math.min(12, 34, 54, 65, 78, 99, 100, 2));

// // Math.max(); <<--  find max value

// console.log(Math.max(12, 34, 54, 65, 78, 99, 100, 2));


// Math.random();   <<-- give number 0 to 1;

// console.log(Math.floor(Math.random()*10));

// Math.trunc(); <<==  return integer part of Number  no moatter numbre positive or negative;

// console.log(Math.trunc(4.66));
// console.log(Math.trunc(-9.66));

// ===========================================================================================

// ===================== DOM ========================

//    -->> Windows vs document
//    -->> DOM vs BOM
//    -->> DOM nevigation
//    -->> Searching and getting nevigation



// InterView Queastion

// -->> what is the root element of document.
//  ANS.--> document.documentElement   HTML is the root element of document;


// ================= Events In javaScript ========================


// 1. Events objects
// 2. MouseEvent
// 3. KeyborddEvents
// 4. InputEvents

//    UpperCase                             LowerCase
// 1. Events Object is the parent object of event object
// example
//  mouse Event focus event and keybord event
