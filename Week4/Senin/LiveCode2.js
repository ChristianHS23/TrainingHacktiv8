/*
--Algoritma
    Simpan nilai 'count' dengan nilai 0
    Untuk setiap nilai i sama dengan 0 dengan i lebih kecil dari panjang karakter scores maka i akan bertambah 1
    Jika nilai array scores didalam setiap i lebih besar dari 75
    maka count akan bertambah 1
    Jika score length memiliki tidak ada isi maka akan mengembalikan string berupa "Data Kosong"
    Dan Jika nilai count sama dengan 0 maka akan mengembalikan string berupa "Tidak ada yang lulus"
    Dan Jika nilai count lebih kecil dari panjang karakter scores maka akan mengembalikan nilai berupa 'count' peserta yang lulus
    Dan Jika nilai count sama dengan panjang karakter scores maka akan mengembalikan string berupa "Semua orang lulus"
*/


function graduatesCount (scores) {
    // Code disini
    var count=0
    for(var i=0;i<scores.length;i++){
        if(scores[i]>75){
            count++
        }
    }
    if(!scores.length) return 'Data Kosong'
    else if(count==0) return 'Tidak ada yang lulus'
    else if(count<scores.length) return count+' orang lulus'
    else if(count==scores.length) return 'Semua orang lulus'
  }
  
  // Test cases
  
  console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
  console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
  console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
  console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
  console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
  console.log(graduatesCount([])); // Data kosong
  