function mengelompokkanAngka(arr) {
    // you can only write your code here!
    for(var i=0;i<arr.length;i++){
        //looping 1
        for(var j=0;j<arr.length;j++){
            //looping 2
            for(var k=0;k<arr.length;k++){
                //looping 3
                
            }
        }

    }
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]