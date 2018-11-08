function sorting(arrNumber) {
    // code di sini
    var checksort=false
    while(!checksort){
        checksort=true
        for(var i=0;i<arrNumber.length;i++){
            if(arrNumber[i-1]>arrNumber[i]){
                checksort=false
                var temp=arrNumber[i-1]
                arrNumber[i-1]=arrNumber[i]
                arrNumber[i]=temp
            }
        }    
    }
    return arrNumber
  }
  function getTotal(arrNumber) {
    // code di sini
    var temp=arrNumber[arrNumber.length-1]
    var counter=0
    if(!arrNumber.length)
        return '\'\''

    /* for(var i=0;i<arrNumber.length;i++){
       
        if(arrNumber[i]>temp){
            temp=arrNumber[i]
        }
    }  */
    for(var j=0;j<arrNumber.length;j++){
        if(arrNumber[j]==temp) 
            counter++
    }
    return 'Angka paling besar adalah '+temp+' dan jumlah kemunculan sebanyak '+counter+' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''