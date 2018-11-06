function cariModus(arr) {
    // you can only write your code here!
    var modus=0
    var count=0
    var hasil=[]
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<i;j++){
            if(arr[i]===arr[j]){
                modus=arr[j]
                count++
            }
        }
        if(count>2) return -1
    }
    if(count)return modus
    else return -1
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1