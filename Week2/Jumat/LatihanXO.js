function generateXO(){
    var hasil=''
    var tempcheckWin=false
    var tempStr=''
    var xo='xo'

    for(var i=0;i<20;i++){
    tempStr+=xo.charAt(~~(Math.random()* xo.length))
        if(tempStr.length>=3){
            break;
        }
    }
    return tempStr
}
    console.log(generateXO())