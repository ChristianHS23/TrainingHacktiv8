var count=11;
var lineOfStar=''

for(var i=0;i<count;i++){
    lineOfStar=''
    for(var j=0;j<count;j++){
        if(j == 0||j==count-1){
            lineOfStar+='*'
        }else if(i==0||i==count-1){
            lineOfStar+='*'
        }else if(i==Math.floor(count/2) && j==Math.floor(count/2)){
            lineOfStar+='*'
        }
        else{
            lineOfStar+=' '
        }
        lineOfStar+=''
    }
    console.log(lineOfStar)
 }

console.log()

var rows3=10;
star=''

//Loop dengan nested loop dengan memanggil star didalam nested loop
for (var i=0;i<~~(rows3/2);i++){  
    star=''
   
    for(var j=i;j<=~~(rows3/2)-1;j++){
        star=star + " "
    }
    for(var k=~~(rows3/2)*2-i;k<=~~(rows3/2)*2;k++){
        star=star + "*"
    }
    for(var l=~~(rows3/2)*2-i;l<=~~(rows3/2)*2;l++){
        star=star + "*"
    }
    for(var m=i;m<=~~(rows3/2)-1;m++){
        star=star + " "
    }
    console.log(star)

}
for (var i=0;i<~~(rows3/2);i++){  
    star=''
    for(var j=~~(rows3/2)-i;j<=~~(rows3/2);j++){
        star=star + " "
    }
    for(var k=i;k<=~~(rows3/2)-1;k++){
        star=star + "*"
    }
    for(var l=i;l<=~~(rows3/2)-1;l++){
        star=star + "*"
    }
    for(var m=~~(rows3/2)-i;m<=~~(rows3/2);m++){
        star=star + " "
    }
    console.log(star)

}
 
  function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  
    for (var i = 0; i < arr.length; i++) {
      for (var x = 0; x < arr[i].length; x++) {
        product *= arr[i][x];
      }
    }
  
  
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
  console.log(multiplyAll([[2,2],[4],[5,6,7]]))
 count=6
 for(var i=0;i<count;i++){
     star=''
     for(var j=0;j<count;j++){
         if(j==i){
            star+='*'
         }
        
         if(j==0||j==count-1){
             star+='*'
         }
         star+=' '
     }
     console.log(star)
 }