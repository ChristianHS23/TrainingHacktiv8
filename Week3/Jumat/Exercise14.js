function mengelompokkanAngka(arr) {
        var hasilarr=[]
        var ahasilgenap=[]
        var ahasilganjil=[]
        var ahasilK3=[]
   
    // you can only write your code here!
    for(var i=0;i<arr.length;i++){
        //looping 1
            if(arr[i]%3==0){
               ahasilK3.push(arr[i])
            }
            else if(arr[i]%2==1){
               ahasilganjil.push(arr[i])
            }
            else if(arr[i]%2==0){ 
               ahasilgenap.push(arr[i])
            }                
    }
    hasilarr=[ahasilgenap,ahasilganjil,ahasilK3]
    return hasilarr
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]