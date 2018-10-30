function angkaPalindrome(num) {
    // you can only write your code here!
    if(num<=9){
        num+=1
        return num
    }else if(num<=99){
        var cekpal=num%10
        var ceknum=~~(num/10)
        if(ceknum!=cekpal){
            if(ceknum>cekpal){
                ceknum=ceknum*10+ceknum
                return ceknum
            }else{
                ceknum+=1
                ceknum=ceknum*10+ceknum
                return ceknum
            }
        }else{
            ceknum+=1
                ceknum=ceknum*10+ceknum
                return ceknum
        }
    }else if(num<=999){
        var cekpalR=num%10
        var cekpalL=~~(num/100)
        var cekpalM=~~((num%100)/10)
        if(cekpalL!=cekpalR && (cekpalL!= cekpalM || cekpalR!=cekpalM)){
            if(cekpalL<cekpalR){
                cekpalM=(cekpalM+1)*10
                cekpalR=cekpalL
                cekpalL1=cekpalL*100
                var totalPal=cekpalL1+cekpalM+cekpalR
                return totalPal
            }else if(cekpalR<cekpalL){
                cekpalM=(cekpalM)*10
                cekpalR=cekpalL
                cekpalL1=cekpalL*100
                var totalPal=cekpalL1+cekpalM+cekpalR
                return totalPal
            }
        }
        else{
            cekpalM=(cekpalM+1)*10
                cekpalR=cekpalL
                cekpalL1=cekpalL*100
                var totalPal=cekpalL1+cekpalM+cekpalR
                return totalPal
        }
    }else if(num<=9999){
        var cekpalR=num%10
        num=~~(num/10)
        var cekpalMR=num%10
        num=~~(num/10)  
        var cekpalML=num%10
        num=~~(num/10)     
        var cekpalL=num%10
        if(cekpalR!=cekpalL || cekpalMR !=cekpalML){
           if(cekpalL>cekpalR && cekpalML==cekpalMR &&cekpalL>cekpalML){
             cekpalL1=(cekpalL+1)*1000
             cekpalR1=(cekpalL+1)
             var totalpal=cekpalL1+cekpalR1
             return totalpal
           }else if(cekpalL>cekpalR && cekpalML==cekpalMR &&cekpal<cekpalML){
            cekpalL1=cekpalL*1000
            cekpalR1=cekpalL
            var totalpal=cekpalL1+cekpalR1
            return totalpal
          }else if(cekpalL<cekpalR && cekpalML==cekpalMR){
            cekpalL1=(cekpalL+1)*1000
            cekpalR1=cekpalL+1
            var totalpal=cekpalL1+cekpalR1
            return totalpal
          }else if(cekpalMR>cekpalML){
             cekpalL1=cekpalL*1000
             cekpalML1=(cekpalML+1)*100 
             cekpalMR1=(cekpalML+1)*10
             cekpalR1=cekpalL
             var totalpal=cekpalL1+cekpalML1+cekpalMR1+cekpalR1
             return totalpal  
           }else if(cekpalMR<cekpalML){
            cekpalL1=cekpalL*1000
            cekpalML1=cekpalML*100 
            cekpalMR1=cekpalML*10
            cekpalR1=cekpalL
            var totalpal=cekpalL1+cekpalML1+cekpalMR1+cekpalR1
            return totalpal  
          }
        }else{
            cekpalL1=cekpalL*1000
            cekpalML1=(cekpalML+1)*100 
            cekpalMR1=(cekpalMR+1)*10
            cekpalR1=cekpalL
            var totalpal=cekpalL1+cekpalML1+cekpalMR1+cekpalR1
            return totalpal  
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(33)); // 11
  console.log(angkaPalindrome(865)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(2538)); // 1001