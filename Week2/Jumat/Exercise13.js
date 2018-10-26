function xo(str) {
    var countX=0
    var countY=0
    for(i=0;i<str.length;i++){
        if(str[i]=='x'){
            countX+=1
        }else if(str[i]=='o'){
            countY+=1
        }
    }
    if(countX==countY){
        return true
    }else{
        return false
    }

    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true