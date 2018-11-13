function cariModus(arr) {
    // you can only write your code here!
    var modus=0
    var max=0
    
    for(var i=0;i<arr.length;i++){//looping 1
        var counter=0
        for(var j=i;j<arr.length;j++){//looping 2
            if(arr[i]===arr[j] && j!=i){
                counter++        
            }
        }
        if(max<counter){// membandingin nilai counter dengan max supaya max bisa dibawa keluar
           max=counter //mencari nilai paling kecil 
           modus=arr[i] //nilai sama dengan arr yang sama tersebut
        }
    }
    if(max == arr.length-1) 
        return -1
    else if(max>0) 
        return modus
    else 
        return -1
     
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([6,5, 10, 10, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1