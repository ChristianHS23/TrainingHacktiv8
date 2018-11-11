function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var str=String(angka)
    var temp=1
    if(str.length===1){
        return angka
       }else{   
           //cara salah  
            /* var hasilKali=( Number(str[0]) * kaliTerusRekursif(str.slice(1))  )   
            return kaliTerusRekursif(hasilKali) */
            //cara benar
            for(var i=0;i<str.length;i++){
                temp*=str[i]
            }
            
            return kaliTerusRekursif(temp)
        }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6