
function oddEvenOperation(numbers) {
    // your code here
    var temp=0
    for(var i=0;i<numbers.length;i++){
        if(numbers[i]%2==0) temp+=numbers[i]
        else if(numbers[i]%2==1) temp-=numbers[i]
    }
    if(!numbers.length) return '\'data kosong\''
    return temp
  }
  
  console.log(oddEvenOperation([1, 3, 2, 2, 5])); //-5
  console.log(oddEvenOperation([10, 11, 3, 2, 5, 7, 99, 120])); //7
  console.log(oddEvenOperation([])); //'data kosong'
  