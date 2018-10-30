function angkaPalindrome(num) {
    // you can only write your code here!
    var validasi=false
    while(true){
        var balikangka=''
        var strnum = String(num);
        for(i=strnum.length-1;i>=0;i--){
            balikangka+=strnum[i]
        }
        if(validasi==true){
            if(balikangka==num){             
                return num               
            }
        }else{
            validasi=true
        }       
        num++
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001