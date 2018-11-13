/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/


/* function uniqueDuplicateFinder(sentence) {
    // only code here!
    var tempUniq=[]
    var tempDuplicate=[]
    var temparr=[]
    var str=''
    var tempstr=''
    var objOutput= new Object
    for(var i=0;i<sentence.length;i++){
        tempstr+=sentence[i].toLowerCase()
    }
    for(var j=0;j<=tempstr.length;j++){
        if(tempstr[j]!==' '&&tempstr.length!=j){
            str+=tempstr[j]       
        }else{
            temparr.push(str)
            str=''
        }
    }
   
    for(var k=0;k<temparr.length;k++){
        var notDuplicate=true
        for(var m=0;m<tempUniq.length;m++){
            if(tempUniq[m]==temparr[k]){
                tempDuplicate.push(temparr[k])
                notDuplicate=false
            }
        }
        if(notDuplicate)
            tempUniq.push(temparr[k])
    }
    var tempUniq2=[]
    for(var n=0;n<tempUniq.length;n++){
        var checknotDuplicate=true
        for(var o=0;o<tempDuplicate.length;o++){
            if(tempDuplicate[o]==tempUniq[n])
            checknotDuplicate =false
        }
        if(checknotDuplicate)
        tempUniq2.push(tempUniq[n])
    }
    objOutput.unique=tempUniq2
    objOutput.duplicate=tempDuplicate
    
    return objOutput
  } */

  function uniqueDuplicateFinder(sentence) {
    var arrSentence=sentence.split(' ')
    var objSentence=new Object
    var objResult=new Object
    objResult.unique=[]
    objResult.duplicate=[]
    for(var i=0;i<arrSentence.length;i++){
        if(!objSentence[arrSentence[i].toLowerCase()]){
            objSentence[arrSentence[i].toLowerCase()]=0
        }
        objSentence[arrSentence[i].toLowerCase()]++
    }
    for(var isi in objSentence){
        if(objSentence[isi]==1){
            objResult.unique.push(isi)
        }else{
            objResult.duplicate.push(isi)
        }
    }
    return objResult
  }
  
  console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
  // {
  //   unique: [ 'black', 'and', 'red' ],
  //   duplicate: [ 'hello', 'dragon' ]
  // }
  
  console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
  // {
  //   unique: [ 'hlloe' ],
  //   duplicate: [ 'hello' ]
  // }
  
  console.log(uniqueDuplicateFinder('john is coding')); 
  // {
  //   unique: [ 'john', 'is', 'coding' ],
  //   duplicate: []
  // }
  
  console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
  // {
  //   unique: [],
  //   duplicate: [ 'blue', 'red', 'violet']
  // }
  
  console.log(uniqueDuplicateFinder(''));
  // {
  //   unique: [],
  //   duplicate: []
  // }
  