/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(fishes) {
    var arrhasil=[]
    var hasil=''
    
   
   for(var i=0;i<fishes.length;i++){
       var checkFind=false
       var tampung=''
       for(var j=0;j<4;j++){
           tampung+=fishes[i][j]
           if(tampung=='ikan'){
            checkFind=true
           }
       }
       if(checkFind)
        arrhasil.push(fishes[i])
   }
   if(!arrhasil.length)
        return 'Tidak ada data'
   for(var k=0;k<arrhasil.length;k++){
        if(k!==arrhasil.length-1){
            hasil+=arrhasil[k]+', '
        }else{
            hasil+='dan '+ arrhasil[k]
        }
   }
   return hasil
}

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data
