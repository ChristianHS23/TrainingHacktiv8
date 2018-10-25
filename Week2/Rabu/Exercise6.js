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
//---------------------------------Soal 2----------------------------------------------
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
//-------------------------------------Soal 3----------------------------------------
var maksCounter=100
for(var counter=1; counter<=maksCounter;counter++){
    if(counter%2!=0){
        console.log(counter +'- Nilai ini Ganjil')
    }else if(counter%2==0){
        console.log(counter+'- Nilai ini Genap')
    }
}
console.log("Mencari Kelipatan 3")
//------------------------Kelipatan3-------------------
for(var counter=1;counter<=maksCounter;counter+=2){
    if(counter%3!=0){
        console.log("Counter "+counter )
    }else if(counter%3==0){
        console.log('Counter '+counter+' Kelipatan 3')
    }
}
console.log("Mencari Kelipatan 6")
//----------------------Kelipatan6---------------------
for(var counter=1;counter<=maksCounter;counter+=5){
    if(counter%6!=0){
        console.log("Counter "+counter )
    }else if(counter%6==0){
        console.log('Counter '+counter+' Kelipatan 6')
    }
}
console.log("Mencari Kelipatan 10")
//---------------------Kelipatan10---------------------
for(var counter=1;counter<=maksCounter;counter+=9){
    if(counter%10!=0){
        console.log("Counter "+counter )
    }else if(counter%10==0){
        console.log('Counter '+counter+' Kelipatan 10')
    }
}
