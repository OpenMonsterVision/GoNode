function timestable(x) {
	for(i = 1; i <= 1200; i++) {
		console.log(i+" * "+x+" = "+ (x*i));
	}
}
////for(n = 2; n <= 1200; n++ ){
////		timestable(n);
////	}
////async.eachSeries(hugeArray, function iteratee(item, callback) {
////    if (inCache(item)) {
////        async.setImmediate(function() {
////            callback(null, cache[item]);
////        });
////    } else {
////        doSomeIO(item, callback);
////        //...
////    }
////});
var async = require("async");
//var longA = Array.from(Array(1200).keys())
//console.log(longA)
////async.eachSeries(longA, timetable())
//async.eachSeries(longA, function iteratee(item, callback) {
//    if (inCache(item)) {
//        async.setImmediate(function() {
//            callback(null, cache[item]);
//        });
//    } else {
//        timestable(item, callback);
////        //...
//    }
//});
////
    for(n = 2; n <= 12; n++ ){

async.parallel([
function () { 
		timestable(n);
    }
]);
    }
        
