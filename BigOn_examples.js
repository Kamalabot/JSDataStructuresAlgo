function exampleLinear(n){
    for (var i= 0; i < n; i++){
        console.log(i);
    }
}

function exampleQuadratic(n){
    for (var i= 0; i < n; i++){
        console.log(i);
        for (var j = 1; j < n; j++){
            console.log(j);
        }
    }
}

function exampleCubic(n){
    for (var i= 0; i < n; i++){
        console.log(i);
        for (var j = 1; j < n; j++){
            console.log(j);
            for(var z = 1; z < n; z++){
                console.log(z);
            }
        }
    }
}

function logAlgo(n){
    for(var i = 2; i < n; i = i * 2){
        console.log(i);
    }
}

logAlgo(10000)




