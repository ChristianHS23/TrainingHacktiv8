var rows1=5; // input the number of rows

// do loops to display asterisks in the console.
for(var i=0;i<rows1;i++){  
    console.log("*")
}
console.log("Soal2")

var rows2=5; // input the number of rows
star=""
// do loops to display asterisks in the console.
for(var i=0;i<rows2;i++){
    star="*"
    for(var j= 0;j<rows2;j++){
        star=star+"*"
    }

    console.log(star )
}

console.log("Soal3")

var rows3=5;
star=""

for (var i=0;i<rows3;i++){
    
    for(var j=rows3-i;j<=rows3;j++){
        star=star + "*"
    }
  star+="\n"
}

console.log(star)