// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *
contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)
/* 

//cara 1

function drawSymbolicColsBox(num) {
    // your code here
    var symbol=''
    for(var i=1;i<=Math.pow(num,2);i++){
    
      if(i%3==0){
          symbol+='*'
      }else if(i%2==1){
          symbol+='@'
      }else{
          symbol+='$'
      }
      if(i%num===0 && i!==Math.pow(num,2)){
          symbol+='\n'
      }
      else{
          symbol+=' '
      }
    }
    console.log(symbol)
  } */

// cara 2
function drawSymbolicColsBox(num) {
    // your code here
    var symbol=''
    var k=1
    for(var i=0;i<num;i++){
        symbol+=''
        for(var j=0;j<num;j++){
            if(k%3==0)
                symbol+='* '
            else if(k%2==1)
                symbol+='@ '
            else
                symbol+='$ '
            if(k%num==0 && k!==num*num){
                symbol+='\n'
            }
            k++
        }
      
    }
    console.log(symbol)
  }
  
 //  drawSymbolicColsBox(3);
   drawSymbolicColsBox(5);
 // drawSymbolicColsBox(1);
  