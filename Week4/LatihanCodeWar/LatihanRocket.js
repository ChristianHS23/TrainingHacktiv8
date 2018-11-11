/*
=============
UNIQUE FINDER
=============
Name :_____________

[INSTRUCTIONS]
uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.
[CONSTRAINTS]
Tidak ada batasan untuk soal ini.
[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function uniqueFinder(sentence) {

    if(!sentence.length)
       return 'NO WORDS!'
    strlower=''
    for(var k=0;k<sentence.length;k++){
        strlower += sentence[k].toLowerCase()
    }
    var tempstr=''
    var temparr=[]
    
    for(var i=0;i<=strlower.length;i++){
        if(strlower[i]!==' ' && strlower.length!==i){
            tempstr+=strlower[i]
        }else{
            temparr.push(tempstr)
            tempstr=''
        }
    }

    var temparr2=[]

    for(var j=0;j<temparr.length;j++){
        var notDuplicate=true
        for(var k=0;k<=temparr2.length;k++){
            if(temparr2[k]==temparr[j]){
                  notDuplicate=false   
            }
        }

        if(notDuplicate)
        temparr2.push(temparr[j])
    }
    return temparr2
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'

