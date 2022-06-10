function isEquivalent(a, b){
    //get properties of the objects
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if(aProps.length != bProps.length){
        return false;
    }
    /*
    for(elm of Object.getOwnPropertyNames(a)){
        console.log(elm);
    }
    */
    for(var i = 0; i < aProps.length; i++){
        var propName = aProps[i];

        if (a[propName] !== b[propName]){
            return false;
        }
    }

    return true;
}

//when returning booleans use console.log to get the returns
console.log(isEquivalent({'h1':12},{'h1':2}));

console.log(isEquivalent({'prop1':'test', 'prop2':function(){}},
            {'prop1':'test','prop2':function(){}}))