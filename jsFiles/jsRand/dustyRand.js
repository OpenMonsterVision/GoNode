#!/usr/local/bin/node
min = process.argv[2]
max = process.argv[3]
minone = parseInt(min) - 1
maxone = parseInt(max) + 1
//console.log(min + max)
function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    var a = [];
	for(i = minone; i < max;){
        b = getRandomInt(min,maxone) 

            if(!a.includes(b)){
                a[i] = b
                    i++;
        }
        }

a = a.filter(function( element ) {
       return element !== undefined;
});
console.log(a)
