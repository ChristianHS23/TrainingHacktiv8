function drawPattern(num){
    var line=''
    for(var i=1;i<=num;i++){
        line=''
        for(var j=1;j<=num;j++){

            if(i%2!=0 && j%2==0){
                
                line+='\\'
            }
            else if(i%2==0 && j%2!=0){
              
                line+='/'
            }
            else{
                line+=' '
            }
        
        }
        console.log(line)
    }

}

drawPattern(3)