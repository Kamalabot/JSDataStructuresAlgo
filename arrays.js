var arry1 = [5, 7, 2, 6, 8];
arry1.push(55);
arry1.pop(8);
//the push and subsequent pop work on the orig array
console.log(arry1);

len = arry1.length;

for(var i = 0; i < len; i++){
    console.log(arry1[i]);
}

var counter = 0;

var array1 = ['all','cows','are','big'];

for(var index in array1){
    console.log(index);
}

for(var index in array1){
    console.log(array1[index]);
}

array1 = [0,5,8,7,9];

array1.forEach((ele, ind) =>{
    array1[ind] = ele + 1;
    console.log(ele);
})

console.log(array1);

//slice fn doesn't work on master arry
temp = array1.slice(1,2);
console.log(temp)

console.log(array1.splice(1,3,8,7,79,6,7));
//[ 'cows', 'are', 'big' ]

// then the array1 becomes [ 'all', 8, 7, 79, 6, 7 ]
console.log(array1);

arry2= array1.concat([7,5,5,8,6,2,5])
console.log(arry2);

//spreading the arguments using ...
function add_num(a, b, c, d){
    return a + b + c + d;
}
console.log(add_num(...arry1));

function findSum(arr, weight){
    
    for (var start = 0; start < arr.length; start++){
        
        for(var sec = start + 1; sec < arr.length; sec++){
            
            temp = arr[start] + arr[sec];
            
            if(temp == weight){

                return [start, sec];
                 
            }
        }
    }
    
    return -1;
}

trial = [6,5,7,9,2,3,8];
weight = 7;

console.log(findSum(trial,7));

function betterFindSum(arr, weight){
    var hashtable = {};
    var arrLength = arr.length;

    for (var i = 0; i< arrLength; i++ ){
        var currElem = arr[i];
        diff = weight - currElem;

        if (hashtable[currElem] != undefined){
            return[i, hashtable[weight-currElem]];
        } else {
            hashtable[diff] = i;
        }
    }
    return -1;
}

var dataArr = [ '1997 [YR1997]',
    '1998 [YR1998]',
    '1999 [YR1999]',
    '2000 [YR2000]',
    '2001 [YR2001]',
    '2002 [YR2002]',
    '2003 [YR2003]',
    '2004 [YR2004]',
    '2005 [YR2005]',
    '2006 [YR2006]',
    '2007 [YR2007]',
    '2008 [YR2008]',
    '2009 [YR2009]',
    '2010 [YR2010]',
    '2011 [YR2011]',
    '2012 [YR2012]',
    '2013 [YR2013]',
    '2014 [YR2014]',
    '2015 [YR2015]',
    '2016 [YR2016]\r\nMobile cellular subscriptions (per 100 people)']

const regex = /\d{4}.{1}\[([A-Z]{2}\d{4})\]/g;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('.*\\[(.*)\\]', 'gm')

const str = `Series Name,Series Code,Country Name,Country Code,1997 [YR1997],1998 [YR1998],1999 [YR1999],2000 [YR2000],2001 [YR2001],2002 [YR2002],2003 [YR2003],2004 [YR2004],2005 [YR2005],2006 [YR2006],2007 [YR2007],2008 [YR2008],2009 [YR2009],2010 [YR2010],2011 [YR2011],2012 [YR2012],2013 [YR2013],2014 [YR2014],2015 [YR2015],2016 [YR2016]`;
const subst = '$1';

console.log(typeof str)

// The substituted value will be contained in the result variable
const result = str.replace(regex, subst);

console.log('Substitution result: ', result);
    