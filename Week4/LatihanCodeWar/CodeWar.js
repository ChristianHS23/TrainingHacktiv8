

/* 
In a factory a printer prints labels for boxes. For one kind of
 boxes the printer has to use colors which, for the sake of simplicity,
  are named with letters from a to m.

The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm meaning that 
the printer used three times color a, four times color b, one time color h 
then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control
 string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the 
error rate of the printer as a string representing a rational whose numerator is 
the number of errors and the denominator the length of the control string. 
Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
 */
/* function printerError(s) {
    // your code
    var validasi='nopqrstuvwxyz'
    var count=0
    for(var i=0;i<s.length;i++){
        for(var j=0;j<validasi.length;j++){
            if(validasi[j]==s[i]){
                count++
            }
        }
    }
    return count+'/'+ s.length
} */
//shorthand
/* function printerError(s) {
    return (s.match(/[^a-m]/g) || []).length + "/" + s.length;
}

console.log(printerError('')) */


//----Square Digits soal code war
/* function squareDigits(num){
    //may the code be with you
    strnum= String(num)
    newnum=''
      for(var i=0;i<strnum.length;i++){
          newnum+=strnum[i]*strnum[i]
      }
      return parseInt(newnum)
  }
console.log(squareDigits(9119))//811181
 */
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