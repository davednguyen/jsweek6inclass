console.log("read from functions javascript file");

//call first function
firstFunc();    

//call functoin
helloThere();

//call function
evens();

//create first function
function firstFunc(){
    console.log("this is first function")
};

//create test function
function helloThere(){
    var name = prompt("hello what is your name? ");
    console.log("hello " + name);
}

//create evens function

function evens(){
    for(i = 10 ; i <= 20; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}