/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!

# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'

*/

function multiDimensionalXO (size) {
    // Code here
    if(!size)
    return 'Invalid Input'

   arrhasi=[]
     for(var i=0;i<size;i++){
        var arrxo=[]
        for(var j=0;j<size;j++){
            if(j%2==0)
            arrxo.push('o')
            else
            arrxo.push('x')
        }
        arrhasi.push(arrxo)
     }
     return arrhasi
  }
  
  console.log(multiDimensionalXO(3));
  // [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
  
  console.log(multiDimensionalXO(5));
  /*
  [ [ 'o', 'x', 'o', 'x', 'o' ],
    [ 'x', 'o', 'x', 'o', 'x' ],
    [ 'o', 'x', 'o', 'x', 'o' ],
    [ 'x', 'o', 'x', 'o', 'x' ],
    [ 'o', 'x', 'o', 'x', 'o' ] ]
  */
  
  console.log(multiDimensionalXO(6));
  /*
  [ [ 'o', 'x', 'o', 'x', 'o', 'x' ],
    [ 'o', 'x', 'o', 'x', 'o', 'x' ],
    [ 'o', 'x', 'o', 'x', 'o', 'x' ],
    [ 'o', 'x', 'o', 'x', 'o', 'x' ],
    [ 'o', 'x', 'o', 'x', 'o', 'x' ],
    [ 'o', 'x', 'o', 'x', 'o', 'x' ] ]
  */
  
  console.log(multiDimensionalXO(0));
  // Invalid input
  