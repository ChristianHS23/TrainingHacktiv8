/* function palindrome(kata) {
    var kata2=''
    // you can only write your code here!
    for(var i=kata.length-1;i>=0;i--){
        kata2+=kata[i]
    }
    if(kata==kata2){
        return true;
    }else{
        return false;
    }
  }
   */


   function palindrome(kata){
   
    for(var i=0; i<kata.length/2; i++){
        if(kata[i] != kata[(kata.length-1)-i]){
            return false
        }    
    }
    return true
}
   
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false