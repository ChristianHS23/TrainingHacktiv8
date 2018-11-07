/* 
function digitsGrouper(numbers) {
    // only code here..
    var digit1=[]
    var digit2=[]
    var digit3=[]
    var digit4=[]
    var hasilarr=[]
    for(var i=0;i<numbers.length;i++){
        if(numbers[i]<10) digit1.push(numbers[i])
        else if(numbers[i]<100) digit2.push(numbers[i])
        else if(numbers[i]<1000) digit3.push(numbers[i])
        else if(numbers[i]<10000) digit4.push(numbers[i])
    }
    hasilarr=[digit1,digit2,digit3,digit4]
    return hasilarr
  } */

  function digitsGrouper(numbers){
      var result=[[],[],[],[]]
      for(var i=0;i<numbers.length;i++){
          var index = String(numbers[i]).length - 1
          if(result[index]== undefined){
              result[index]= [numbers[i]]
          }else{
              result[index].push(numbers[i])
          }
      }
      return result
  }
  
  console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
  console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
  console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
  console.log(digitsGrouper([])); // [ [], [], [], [] ]
  console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]
  