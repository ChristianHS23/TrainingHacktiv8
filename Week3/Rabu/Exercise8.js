function pasanganTerbesar(num) {
    // you can only write your code here!
     var strNum=String(num)
     var hasil=0
     for(var i=0;i<strNum.length;i++){
        var temp=strNum[i]+strNum[i+1]
        if(parseInt(temp)>hasil){
            hasil=temp
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99