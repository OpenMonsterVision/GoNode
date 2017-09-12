table = '';
// table = [];

function timestable(x) {
    for (i = 1; i <= 12; i++) {
        table += (i + " * " + x + " = " + (x*i) ) + '\n ';
        //table += `${i} * ${x} = " + ${(x*i)}\n `; // slower slightly than above
    }
}

for (n = 2; n <= 1200; n++ ) {
    timestable(n);
}

// 1
// pre modify ----- // console.log(i+" * "+x+" = "+ (x*i));
// real    0m0.440s
// user    0m0.391s
// sys    0m0.047s

// 2
// loser --------- // table.map((prb, i, ar) => console.log(prb));
// real    0m0.499s
// user    0m0.450s
// sys    0m0.048s


// 3
// using for loop to log after all math done.
//=====================================================
// for (var i = 0; i < table.length; i++) {
//     console.log(table[i]);
// }
//
// real    0m0.419s
// user    0m0.373s
// sys    0m0.045s
//=====================================================


// console.log(table.join('\n'));
// real    0m0.359s
// user    0m0.279s
// sys    0m0.033s
//=====================================================

console.log(table)
