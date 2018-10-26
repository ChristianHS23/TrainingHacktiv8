function xo(str) {
    var countX=0
    var countY=0
    for(i=0;i<str.length;i++){
        if(str[i]=='x'){
            countX+=1
        }else if(str[i]=='o'){
            countY+=1
        }
    }
    if(countX==countY){
        return true
    }else{
        return false
    }

    // you can only write your code here!
  }
  console.log('Hasil Soal')
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true


  //------------------------------------------------------------------------------------
  //---------------------------Versi Iseng----------------------------------------------
  //------------------------------------------------------------------------------------

/*
  Membuat minigame xo dengan merandom nilai x dan o dan ketika nilai x / o muncul berturut
  turut 3x maka dia akan menang

*/
console.log('Iseng')
function generateXO(){
    var hasil=''
    var tempcheckWin=false
    var tempStr=''
    var xo='xo'

        for(var i=0;tempcheckWin!=true;i++){
            tempStr+=xo.charAt(~~(Math.random()* xo.length))
                if(tempStr.charAt(i)==='x'&&tempStr.charAt(i-1)==='x'&&tempStr.charAt(i-2)==='x'){
                    hasil='X Wins'
                    console.log(tempStr) 
                    tempcheckWin=true;
                    return hasil
                }else if(tempStr.charAt(i)==='o'&&tempStr.charAt(i-1)==='o'&&tempStr.charAt(i-2)==='o'){
                    hasil='O Wins'
                    console.log(tempStr)
                    tempcheckWin=true 
                    return hasil
                } 
        }   
}

   console.log(generateXO())