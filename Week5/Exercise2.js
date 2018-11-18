function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    
    var hasil=[]
    if(!arrPenumpang.length){
        return hasil
    }
    for(var i=0;i<arrPenumpang.length;i++){
        var from=''
        var goTo=''
        var harga=0
        for(var j=0;j<rute.length;j++){
            if(rute[j]==arrPenumpang[i][1]){
                from=arrPenumpang[i][1]
            }else if(rute[j]==arrPenumpang[i][2]){
                goTo=arrPenumpang[i][2]
            }else if(from){
                harga+=2000
            }
            if(from && goTo){ 
                harga+=2000
                break;
            }
        }

       hasil.push(angkot={ 
            penumpang:arrPenumpang[i][0], 
            naikDari:arrPenumpang[i][1], 
            tujuan: arrPenumpang[i][2], 
            bayar: harga
        })
    }
    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]