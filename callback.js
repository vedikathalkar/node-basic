/* it is a function which is called after the main functions work is complete */

function callback(){
    console.log("Vedika is calling callback function");
}

var add = function (a,b,callback){
    var result = a+b;
    console.log("result",+result);
    callback();
}

add(3,4,callback);

/* we can also do  */

add (2 , 3,() => console.log("addition completed"));