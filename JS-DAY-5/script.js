let sentence = "I am a comma separated sentence";
let words = sentence.split(" ");
console.log(words);                                 //['I', 'am', 'a', 'comma', 'separated', 'sentence']

let words2 = sentence.split("a");
console.log(words2)                                 // ['I ', 'm ', ' comm', ' sep', 'r', 'ted sentence']



//Ques1. Find out the occurance of "r" in the given text : "tu meri me tera me tera tu meri"

let str="tu meri me tera me tera tu meri";
console.log(str.split("r").length-1);



// 1.Regular function 

// function demo(){
//     let a=10;
//     console.log(a)
// }
// demo()

// function sample(){
//     console.log("sample")
// }
// sample()



// 2.Callback function: We can pass a function as an argument inside another function.

// callback=demo()

function sample(callback){
    console.log("sample")
    callback()
}
function demo(){
    console.log("demo")
}
sample(demo)



// 3.Arrow function

function demo3(){
    return "demo3";
}
console.log(demo3())

const demo2=()=>"demo";
console.log(demo2())



// 4.First class function :
//   * We can treat a variable as a function. 
//   * We can pass a function as an argument inside another function.
//   * We can return a function from a function.



function test(){
    return function test2() {
        console.log("test2");
        return function test3() {
            console.log("test3")
        }
    }
}
      // Easy method : test()()()
let value = test()
let value2 = value()
value2()



// 5.Higher order function 

// Map, Filter, Reduce



// 6.Anonomous function: The function which doesn't have any name

/setTimeout(()=> {

},2000);



// 7.Self invoking function (IIFE): To obtain data privacy and to call a function immediately after the function scope.

function classtest(){
    console.log("classtest")
}
let a =10;
function midterm(){
    classtest();
}
midterm()



let test5 = (function(){
    return "sample5";
})()
console.log(test5)








