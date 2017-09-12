const { spawn } = require('child_process');
//const ls = spawn('ls', ['-lh', '/usr']);
console.log(process.argv[2])
    function timestable(x) {
        for(i = 1; i <= 1200; i++) {
            console.log(i+" * "+x+" = "+ (x*i));
        }
    }
//for(n = 2; n <= 1200; n++ ){
  //  timestable(n);
//}

if(process.argv[2] == false){

    for(n = 2; n <= 12; n++ ){
        const ls = spawn('node', ['dustyTimesThree.js', n, '>output']);
        timetable(n)          
ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
});
    }
}
