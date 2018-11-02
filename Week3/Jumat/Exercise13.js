function targetTerdekat(arr) {
    // you can only write your code here!
    var flagX=0;
    var flagO=0;
    var totalJarak=0
    for(var i=0;i<arr.length;i++){
        if(flagO == 0 && flagX == 0){
            if(arr[i] == 'o'){
                flagO=1
            }else if(arr[i] =='x'){
                flagX=1
            }
        }else if(flagO == 1 && flagX == 0){
            if(arr[i]=='x'){
                 flagX=1
            }else if(arr[i]=='o'){
                totalJarak=0
            }else if(i==arr.length-1){
                totalJarak=0
                return totalJarak
            }
            else{
                totalJarak++
            }
        }else if(flagX==1 && flagO==0){
            if(arr[i]=='o'){
                 flagO=1
            }else if(arr[i]=='x'){
                totalJarak=0
            }else if(i==arr.length-1){
                totalJarak=0
                return totalJarak
            }else{
                totalJarak++
            }
        }else if(flagX==1&&flagO==1){
            return totalJarak +1
        }else{
            return totalJarak
        }
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2