function scope1(){
    var top = 'top';
    bottom = 'bottom';
    console.log(bottom);

    var bottom;
}
bottom = 'local'; //global variable is not printed not do this
scope1() //prints bottom

function scope2(){
    console.log(bottom);
}

scope2() // prints local

function scope3(print){
    outsideF = 'outFn';
    if(print){
        var insideF = '57';
        console.log(outsideF);
    }
    console.log(insideF);

}
scope3(true);

function scopeLet(print){
    if(print){
        let insideLet='78';
    }
    //console.log(insideLet);
}

scopeLet(true) //throws error

var is20 = false;
console.log(typeof is20);

var age = 19;
console.log(typeof age);

var me = {firstName:"Bot",lastName:"Solver"};
console.log(typeof me);

var nullVar = null;
console.log(typeof nullVar);

var fdn = function(){
    console.log(56);
}
console.log(typeof fdn);

//guess what will be the output

console.log("5" === 5)