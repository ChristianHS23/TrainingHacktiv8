function bandingkanAngka(angka1,angka2){
    if(angka1<angka2){
        return true
    }else if(angka1>angka2){
        return false
    }else if(angka1===angka2){
        return -1
    }
    else{
        return 'error'
    }
}

function bandingkanDigit(angka1,angka2){
    var strAngka1 =angka1.toString()
    var strAngka2 =angka2.toString()

    if(strAngka1.length > strAngka2.length){
        return true
    }else if(strAngka1.length == strAngka2.length){
        return -1
    }else{
        return false
    }        

}


console.log(bandingkanDigit(100,23));//-->true
console.log(bandingkanDigit(3,23));//-->false
console.log(bandingkanDigit(1000,2000));//-->-1
/* 
// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false */