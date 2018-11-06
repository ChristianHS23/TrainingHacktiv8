/*
--Algoritma
    Simpan Cek dengan semua nilai string 
    Simpan hasil dengan nilai berapa pun
    Untuk setiap nilai i sama dengan 0 dengan i lebih kecil dari panjang karakter sentence ,maka i akan ditambah 1
    Untuk setiap nilai j sama dengan 0 dengan j lebih kecil dari panjang karakter cek , maka j akan ditambah 1
    Jika nilai sentence di setiap i sama dengan nilai cek di setiap j 
    maka nilai yang sama dengan cek akan ditambahkan ke hasil
    Tampilkan hasil
    Jika tidak ada nilai yang sama dengan cek 
    Tampilkan kutip yang menandakan nilai kosong
*/
 function hapusAngka(sentence) {
    // your code here
    var Cek='abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hasil=''
    for(var i=0;i<sentence.length;i++){
        
        for(var j=0;j<Cek.length;j++){
            if(sentence[i]===Cek[j]){
                hasil+=Cek[j]
            }
        }
    }
    if(!hasil) return '\'\''
    return hasil
  }
 
  console.log(hapusAngka('hacktiv8')); //hacktiv
  console.log(hapusAngka('17 Agustus 1945')); //Agustus
  console.log(hapusAngka('')); //''
 