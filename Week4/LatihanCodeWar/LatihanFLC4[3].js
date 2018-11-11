/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga){
    var output=new Object
    var pecahan=[100000,50000,20000,10000,5000,1000]
    var Sisa=bayar-harga
    if(bayar<harga)
        return 'Uang Tidak Cukup'

    while(Sisa!=0){
        for(var i=0;i<pecahan.length;i++){
            if(Sisa>=pecahan[i]){
                if(!output[pecahan[i]]){
                    output[pecahan[i]]=0    
                }else if(output[pecahan[i]]==5){
                    continue 
                }
                output[pecahan[i]]++
                Sisa-=pecahan[i]
                break
            }
        }
    }
    return output
}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
 console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
 console.log(hitungKembalian(900000, 8000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
 console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
 console.log(hitungKembalian(50000,500000)); // Uang tidak cukup


