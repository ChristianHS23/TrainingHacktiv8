/* function ubahHuruf(kata) {
    // you can only write your code here!
    var kamus='abcdefghijklmnopqrstuvwxyz'
    var temp=''
    for(var i=0;i<kata.length;i++){
        for(var j=0;j<kamus.length;j++){
            if(kata[i]==kamus[j]){
                temp+=kamus[j+1]
            }
        }
    }
    return temp
  }
   */
  //function keycode  var.charCodeAt
  function ubahHuruf(kata){
      var temp=''
     
      for(var i=0;i<kata.length;i++){
          var code=kata.charCodeAt(i)+1//merubah string ke keycode
          var strcode=String.fromCharCode(code)//mengembalikan keycode ke string
          temp += strcode
      }
      return temp
  }

  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu