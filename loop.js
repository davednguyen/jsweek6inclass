for(var i = 99; i > 90; i--){
    console.log( "run and run")
}

//creat loop to print out woof 4 times
for(var i=0 ; i < 4; i++){
    console.log ("woof");
};

//create loop alterately pringo ut whoa and dude on console

for(var i = 0; i < 6; i ++){
    if(i % 2 == 0){
        console.log("whoa");
    }else{
        console.log("dude");
    };
};

//create loop to print 100, 80, 60, 40,20
// for(var i = 100; i > 0 ; i--){
//     if(i % 10 == 0){
//         var j = i/10;
//         if(j % 2 == 0){
//             console.log(i);
//         }
//     }
// }

for(var i = 100; i > 0 ; i = i-20)
{   
     if(i % 20 == 0)
        {        
          console.log(i);         
        }
}
