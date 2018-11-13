/**

  Diberikan sebuah function sumThree dimana function ini menerima input parameter berupa
  array multidimensi.
  Function ini akan mengembalikan nilai yang menambahkan angka yang memiliki 3 digit.

  RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARANG MENGGUNAKAN built in function .map, .filter, .reduce
  - DILARANG MENGGUNAKAN REGEX

**/
/*----Algoritma
    Simpan nilai output sama dengan  0
    Untuk setiap nilai i sama dengan 0 ,i lebih kecil dari panjang karakter params dan i akan selalu bertambah 1
        Untuk setiap nilai j sama dengan 0 ,j lebih kecil dari panjang karakter params pada index i dan j akan selalu bertambah 1
        jika panjang karakter pada params index j sama dengan 3 dan params index j itu berupa angka
            Maka output akan ditambahkan dengan nilai pada params index j
    Tampilkan Output

*/
function sumThree(params) {
    //your code here;
    var output=0
    for(var i=0;i<params.length;i++){
        for(var j=0;j<params[i].length;j++){
            if(String(params[i][j]).length==3 && Number(params[i][j])){
                output+=params[i][j]
            }
        }
    }
    return output

  }
  
  console.log(sumThree([ ['a', 12, 'c', 342 ], ['fox', 4000, 201, true] ])); //543
  