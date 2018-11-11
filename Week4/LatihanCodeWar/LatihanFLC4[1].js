/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

// PSEUDOCODE
/*
STORE 'numberStr' with 'number' convert to string
STORE 'output' with blank string

WHILE length of 'numberStr' less than equal to 3 
      THEN 'output' is 'Rp'concatenate numberStr concatenate', 00'
WHILE length of 'numberStr' greater than 3
     

DISPLAY 'output'
*/
function formatUang(number) {
    //code here
   var strNumber=String(number)
   var hasil=''
    if(strNumber.length <= 3){
        hasil = 'Rp'+number+',00'
    }else{
        var reverseTemp=''
        for(var i=strNumber.length-1;i>=0;i--){
            reverseTemp+=strNumber[i]
        }
        var tempAfterReverse=''
        for(var j=0;j<reverseTemp.length;j++){
            if(j%3==0&&j!=0){
                tempAfterReverse+='.'
            }
                tempAfterReverse+=reverseTemp[j]
        }
        var hasilAfterReverse=''
        for(var k=tempAfterReverse.length-1;k>=0;k--){
            hasilAfterReverse+=tempAfterReverse[k]
        }
        hasil ='Rp'+hasilAfterReverse+',00'
    }
    return hasil
  }
  
  console.log(formatUang(7500)); // Rp7.500,00
  console.log(formatUang(250)); // Rp250,00
  console.log(formatUang(100000)); // Rp100.000,00
  console.log(formatUang(1000000)); // Rp1.000.000,00
  console.log(formatUang(4999999)); // Rp4.999.999,00
  