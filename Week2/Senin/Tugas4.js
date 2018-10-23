var randomKesalahan=Math.floor(Math.random() *2)
var murid=40
var jumlahMuridCek=0
while(jumlahMuridCek != murid){
   
    jumlahMuridCek++
    console.log('murid ke-',jumlahMuridCek)
    
    randomKesalahan=Math.floor(Math.random() *2)
    if(randomKesalahan==true){
        console.log("Murid tersebut dihukum")
       
    }
    else if(randomKesalahan==false){
        console.log("Murid tersebut dipuji")
       
    }
}
