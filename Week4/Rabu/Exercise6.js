function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp=[]
    for(var i=1;i<=angka;i++){
        for(var j=angka;j>0;j--){
            if(i*j == angka){
                temp.push(i+''+j)
            }
        }
  }
  hasil=temp[0].length
  for(var k=0;k<temp.length;k++){
      if(temp[k].length<hasil)
        hasil=temp[k].length
  }
  return hasil
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2


//---code war 1
/* function alphabetWar(fight)
{
    var score=0
    for(var i=0;i<fight.length;i++){
        if(fight[i]==='w') score+=4
        else if(fight[i]==='p') score+=3
        else if(fight[i]==='b') score+=2
        else if(fight[i]==='s') score+=1
        else if(fight[i]==='m') score-=4
        else if(fight[i]==='q') score-=3
        else if(fight[i]==='d') score-=2
        else if(fight[i]==='z') score-=1
    }
    if(score>0) return "Left side wins!"
    else if(score<0) return "Right side wins!"
    else return "Let's fight again!";
}


console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log( alphabetWar("zzzzs"), "Right side wins!" );
console.log( alphabetWar("wwwwww"), "Left side wins!" ); */

//----mencari nilai kali maksimum setiap array
/* function maxProduct(a) {
    // ...
    var v1=0
    var temp=0
    for(var i=0;i<a.length;i++){
        if(a[i]>v1){
            temp=v1
            v1=a[i]  
        }else if(temp<a[i]) temp=a[i]
    }
    return temp*v1
  }
  console.log(maxProduct([56, 335, 195, 443, 6, 494, 252])) //218842   
  console.log(maxProduct([154, 428, 455, 346]));//194740
  console.log(maxProduct([2, 1, 5, 0, 4, 3]))              // 20
  console.log(maxProduct([7, 8, 9]))                       // 72 */

  //---binary to number
  /* function binaryArrayToNumber(arr) {
    // your code
    return arr[0]*8+arr[1]*4+arr[2]*2+arr[3]*1
  };
  console.log(binaryArrayToNumber([0,0,0,1])) //1
  console.log(binaryArrayToNumber([1,0,0,1])) //9 */