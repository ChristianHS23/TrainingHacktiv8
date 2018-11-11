
    /* var tempTambah=num
    while(Number(num)<10){
    for(var i=num-1;i>=1 ;i--){
        tempTambah+=i
        console.log(tempTambah,'ss')
     }
     break
    }
    var str=String(tempTambah)
    if(str.length==0)
        return 0
    else
        return Number(str[0]) + tambahTerus(str.slice(1))
    console.log(tempTambah)
     */

    /* 
    var numStr=String(num)
    
    if(numStr.length==1){
        return num
    }else{
        
       hasilTambah= Number(numStr[0]) + Number( tambahTerus(numStr.slice(1)))
       console.log(hasilTambah,'--')
       return tambahTerus(hasilTambah)
    } */


function tambahTerus(num){
    temp=0
    
    if(String(num).length==1){
        return num
    }
    else{
        /* for(var i=0;i<str.length;i++){
            temp+=Number(str[i])
        } */
        console.log(num,'cek')
        return tambahTerus(tambahTerusS(num))
    }
}
function tambahTerusS(numbers){
    
    str=String(numbers)
    if(str.length==0){
        return 0
    }
    else{
        return Number(str[0]) + tambahTerusS(str.slice(1))
    }
}


console.log(tambahTerus(123451))