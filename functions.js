console.log("read from functions javascript file");

//call first function
firstFunc();    

//call functoin
helloThere();

//call function
evens();

//call function with passing paramenter
helloAnyone("david nguyen");

//call passing number
square(10000000);

//create first function
function firstFunc(){
    console.log("this is first function")
};

//create test function
function helloThere(){
    var name = prompt("hello what is your name? ");
    console.log("hello " + name);
};

//create evens function

function evens(){
    for(i = 10 ; i <= 20; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
};

//create a function that take a parameter
function helloAnyone(name){
    console.log("hello there: " + name);
};

//create a function that take number and display on the log
function square(num){
    //TODO: validate that number is a number
    console.log(num*num);
}