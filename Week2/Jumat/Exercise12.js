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
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

