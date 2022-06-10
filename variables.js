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