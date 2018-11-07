function urutkanAbjad(str) {
    var temp=[]
    // you can only write your code here!
    for(var i=0;i<str.length;i++){
        var keycode=str.charCodeAt(i) 
        temp.push(keycode)
    }
    // temp.sort(function(a,b){return a-b})
    //sort manual
    var tampungSort=0
    var checksort=false
    var sortTampung=[]
    while(!checksort){
        checksort=true
      for(var k=0;k<temp.length;k++){
          if(temp[k-1]>temp[k]){
            checksort=false
            tampungSort=temp[k-1]
            temp[k-1]=temp[k]
            temp[k]=tampungSort
          }
        
      }
      if(checksort)
      sortTampung.push(temp)    
    } 
    /* 
    var strtemp=''
    for(var j=0;j<temp.length;j++){
         strtemp= strtemp+ String.fromCharCode(temp[j])
    }
   return strtemp */

   var strtemp=''
   for(var j=0;j<sortTampung[0].length;j++){
       strtemp+= String.fromCharCode(sortTampung[0][j])
   }
   return strtemp
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'