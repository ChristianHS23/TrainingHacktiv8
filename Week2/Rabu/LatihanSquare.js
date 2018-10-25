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


