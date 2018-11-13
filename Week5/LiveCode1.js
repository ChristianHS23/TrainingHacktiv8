// Competencies: Pseudocode / Algoritma problem solving
/*
==============
Merry Christmas!
==============
Instruksi
=========
Sinterklas akan membagikan banyak hadiah natal tahun ini dengan menempatkan hadiah natal secara acak.
Tugas seorang anak adalah mencari hadiah-hadiah natal yang disembunyikan oleh sinterklas.
Oops, tetapi hal ini diketahui oleh Pit Hitam dan Nenek Penyihir mereka tidak senang dengan hal tersebut
sehingga mereka akan menakut-nakuti anak yang kebetulan lewat di depan mereka.

Tiap anak yang ditakut-takuti oleh Pit Hitam dan Nenek Penyihir sebanyak 3 kali akan berlari pulang karena takut.

Buatlah sebuah function merryChristmas yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - 'Pit Hitam' adalah tempat di mana Pit Hitam berada dan akan menakuti anak-anak
 - 'Nenek Penyihir' adalah tempat di mana Nenek Penyihir berada dan akan menakuti anak-anak
 - 'Hadiah' adalah hadiah natal yang sinterklas berikan
 - '*' adalah jalanan biasa
Dimana function ini akan mengembalikan berapa banyak hadiah natal yang berhasil didapatkan
Contoh
-------
1. inputan: ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
   output: Yeaaayyy, you got all presents: 2
2. inputan: ['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']
   output: Be brave, next time! But it's okay, you got 2 present(s)

RULES
-----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/

/*-----Algoritma
    Simpan output dengan nilai berapa pun
    Simpan count hadiah dengan nilai 0
    Simpan count PitHitam dengan nilai 0
    Simpan count NenekPenyihir dengan nilai 0
    Untuk setiap nilai i =0 dan i lebih kecil dari panjang karakter path dan i akan bertambah 1
        Jika path pada index i sama dengan hadiah , Maka count hadiah akan bertambah 1
        Dan Jika path pada index i sama dengan pit hitam, Maka count PitHitam akan bertambah 1
        Dan Jika path pada index i sama dengan nenek penyihir , maka count NenekPenyhir akan bertambah 1
        Jika total count nenek penyihir dan pit hitam lebih besar dari 2 maka looping selesai
    Jika total count nenek penyihir dan pit hitam lebih kecil dari 3 maka output akan bernilai 'Yeaaayyy, you got all presents: ' count Hadiah
    Jika tidak output akan bernilai 'Be brave, next time! But it\'s okay, you got ' count hadiah ' present(s)'
    Tampilkan nilai Output
*/

function merryChristmas(path) {
    //your code here
    var output=''
    var cHadiah=0
    var cPit=0
    var cNenek=0
    for(var i=0;i<path.length;i++){
        if(path[i]=='Hadiah'){
            cHadiah++
        }else if(path[i]=='Pit Hitam'){
            cPit++
        }else if(path[i]=='Nenek Penyihir'){
            cNenek++
        }
        if((cPit+cNenek)>2)
            break
    }
    if((cPit+cNenek)<3 )
        output='Yeaaayyy, you got all presents: ' +cHadiah
    else
        output='Be brave, next time! But it\'s okay, you got '+cHadiah +' present(s)'

    return output
  }
  
  console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']));
  console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']));
  