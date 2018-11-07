function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var kata=''
    var counter=0
    for(var i=0;i<kalimat.length;i++){
        if(kalimat[i] ==' ' && kata!==''){
            counter++
            kata=''
        }else if(kalimat[i]==' '){
            kata=''
        }else{
            kata+=kalimat[i]
        }
    }
    
    if(kata) counter++
    return counter
}


 //----custom split 
/* function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var limit=' '
    var removeEmptyItems=' '
    if(!limit||limit.length===0) return [kalimat]
    if(!kalimat||kalimat.length===0) return []
    var result=[]
    var j=0
    var lastStart=0
    for(var i=0;i<=kalimat.length;){
        if(i==kalimat.length||kalimat.substr(i,limit.length)==limit){
              if (!removeEmptyItems || lastStart != i){ 
               result[j++] = kalimat.substr(lastStart, i-lastStart);
              }
          lastStart = i+limit.length;
          i += limit.length;    
         } else i++;
    }
    return result
}  */

  // TEST CASES
  console.log(hitungJumlahKata('   I       have     a     dream    ')); // 4
  console.log(hitungJumlahKata('Never     eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5