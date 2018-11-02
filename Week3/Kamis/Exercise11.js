function tentukanDeretAritmatika(arr) {
    var hasil=arr[1]-arr[0]
    var cekTrue=false
    // you can only write your code here!
    for(var i=0;i<arr.length;i++){
        if(i==arr.length-1){
            return cekTrue
        }else{
             if((arr[i+1]-arr[i])==hasil){
            cekTrue= true
            }else{
            return false
           }
        }
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false