function urutkanAbjad(str) {
    var temp=[]
    // you can only write your code here!
    for(var i=0;i<str.length;i++){
        var keycode=str.charCodeAt(i) 
        temp.push(keycode)
    }
    temp.sort(function(a,b){return a-b})
    var strtemp=''
    for(var j=0;j<temp.length;j++){
         strtemp= strtemp+ String.fromCharCode(temp[j])
    }
   return strtemp
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'