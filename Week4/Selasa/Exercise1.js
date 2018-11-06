function angkaPrima(angka) {
    // you can only write your code here!
    for(var i=2;i<angka;i++){
        if(angka%i==0){
            return false
        }
    }
    return true
}
    
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false


//----Hitung number
/* function hitungrray(numbers){
    var total=0
    for(var i=0;i<numbers.length;i++){
        if(i%2==1){
            total+= numbers[i]
        }
       
    }
    return total
}
console.log(hitungrray([2,5,18,12,12]))
console.log(hitungrray([5,4,3,2,1])) */


//------cari Vokal
/* 
function cariVokal(numbers){
    var vocal= 'aiueo'
    var counter=0
    for(var i=0;i<numbers.length;i++){
        for(var j=0;j<vocal.length;j++){
            if(vocal[j]==numbers[i])
            counter++
        }
    }
    return counter
}

console.log(cariVokal(['a','b','c','d','e']))

console.log(cariVokal(['z','d','f'])) */
/* 

//----------Cari Duplicate
function checkDuplicate(numbers){
    var temp=[]
    for(var i=0;i<numbers.length;i++){
        var check=true
        for(var j=0;j<i;j++){
            if(temp[j]===numbers[i]){
                check=false
            }
        }
        if(check){
            temp.push(numbers[i])
        }       
    }
    return temp
}

console.log(checkDuplicate([2,2,3,5,2,5,3]));
 */


 //----------asterik segitiga didalam array
/* 
function asteriks(num){
    var hasil=[]
   
    for(var i=0;i<num;i++){
        var isi=[]
        for(var j=0;j<=i;j++){
            isi.push('*')
        }
        hasil.push(isi)
        
    }
    return hasil
}
console.log(asteriks(6))
console.log(asteriks(5)) */

//-------Hitung ganjil dan genap di dalam array
/* 
function oddEvenMulti(numbers){
    var total=1
    for(var i=0;i<numbers.length;i++){
        for(var j=0;j<numbers[i].length;j++){
            total*=numbers[i][j]
            if(total%2!==0)
            return 'ganjil'
        }
    }
    if(total%2==0)
    return 'genap'
}

console.log(oddEvenMulti([
    [1,2,3],
    [5,3],
    [1,2,3]
]))
 */
