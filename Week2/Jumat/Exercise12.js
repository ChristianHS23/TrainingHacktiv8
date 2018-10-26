function konversiMenit(menit) {
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
  console.log('Soal')
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00


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
