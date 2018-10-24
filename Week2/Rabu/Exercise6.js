//---------------------------------------Soal 1-----------------------------
var loop1='I love coding'
var loop2='I Will Become Full Stack Developer'

var maksLoop = 0;
console.log("Looping ke-1")
while(maksLoop<=20){
   

    console.log(maksLoop+' - ' +loop1)
    maksLoop = maksLoop+ 2 
   
}
console.log("Looping ke-2")
while(maksLoop!=0){
    maksLoop= maksLoop-2

    console.log(maksLoop+' - ' +loop2)

}
console.log("Looping ke-1")
for(var i=1; i<=20;i++){

    maksLoop =i;
    console.log(maksLoop+' - ' +loop1)
   
}
console.log("Looping ke-2")
for(var j=20; j>=1;j--){

    maksLoop =j;
    console.log(maksLoop+' - ' +loop2)
   
}