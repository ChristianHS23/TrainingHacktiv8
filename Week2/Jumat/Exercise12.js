/* function konversiMenit(menit) {
    var jam = Math.floor(menit/60)
    var Menit= Math.floor(menit%60)
    var hasil=''
    
    if(jam>0&&Menit<10){
        hasil+=''+jam+':'+ '0'+Menit
    }else{
        hasil+=''+jam+':'+ Menit
    }
    return hasil
    // you can only write your code here!
  }
 */

  function konversiMenit(menit) {
    var Menit = Math.floor(menit/60)
    var detik= Math.floor(menit%60)
    var hasil=''
    if(Menit<1){
        hasil += detik + ' detik'
    }else if(detik == 0){
        hasil += Menit +' menit'
    }else {
        hasil += Menit +' menit' +' ' +detik +' detik'
    }
    return hasil
    // you can only write your code here!
  }
  console.log('Soal')
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03 // 1 menit 3 detik
  console.log(konversiMenit(124)); // 2:04 // 2 menit 4 detik
  console.log(konversiMenit(53)); // 0:53 // 53 detik
  console.log(konversiMenit(88)); // 1:28  // 1 menit 28 detik
  console.log(konversiMenit(120)); // 2:00 // 2 menit


console.log('Iseng')
//---------------------------------------------------------------------------------------
//------------------------------------------Versi iseng----------------------------------
//---------------------------------------------------------------------------------------

function conversiDetik(waktu){
    var jam = ~~(waktu/3600)
    var menit=~~((waktu/60)%60)
    var detik=~~(waktu%60)
    var hasilS=''
    if(jam<24){
         if(menit<10&&detik<10){
             hasilS+=jam +':'+'0'+menit+':'+'0'+detik
         }else if(menit>10&&detik<10){
             hasilS+=jam +':'+menit+':'+'0'+detik
         }else{
             hasilS+=jam +':'+menit+':'+detik 
         }

         return hasilS
    }else{
        return 'Waktu sudah lebih dari 1 hari'
    }
}
    console.log(conversiDetik(39181))
