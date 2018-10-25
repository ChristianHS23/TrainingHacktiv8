//--------------------------Soal 1----------------------------------------------
console.log('Soal 1')
var rows1=5; // input the number of rows

// do loops to display asterisks in the console.
for(var i=0;i<rows1;i++){  
    console.log("*")
}


console.log("Soal2")
//Soal Nomor 2

var rows2=5; // input the number of rows
star=''
// do loops to display asterisks in the console.
for(var i=0;i<rows2;i++){
    star=''
    for(var j= 0;j<rows2;j++){
        star=star+"*"
    }
    console.log(star )
}


console.log("Soal3")
//Soal Nomor 3

var rows3=5;
star=''

//Loop dengan 1 for
/* for (var i=0;i<rows3;i++){
    star+="*"
    console.log(star)
} */

//Loop dengan nested loop dengan memanggil star didalam nested loop
/* for (var i=0;i<rows3;i++){  
    star=''
    for(var j=rows3-i;j<=rows3;j++){
        star=star + "*"
    }
    console.log(star)

} */


//Loop dengan nested loop dengan memanggil star di luar nested loop
for (var i=0;i<rows3;i++){  
    for(var j=rows3-i;j<=rows3;j++){
        star=star + "*"
    }
  star+="\n"
}
console.log(star)

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//-----------------------------------Versi Iseng----------------------------------------
console.log("Iseng")


var count=12;//count harus ganjil supaya bintang di tengah tidak error
var lineOfStar=''

for(var i=0;i<count;i++){
    lineOfStar=''
    for(var j=0;j<count;j++){
        if(j == 0||j==count-1){
            lineOfStar+='*'
        }else if(i==0||i==count-1){
            lineOfStar+='*'
        }else if(i==Math.floor(count/2) && j==Math.floor(count/2)){
            if(count%2!=0){
            lineOfStar+='*'
            }else if(count%2==0){
                lineOfStar+=' '
            }
        }
        else{
            lineOfStar+=' '
        }
        lineOfStar+=''
    }
    console.log(lineOfStar)
 }

