//---------------------TUGAS------------------------------
//--------------------------------------------------------

//Contoh input
var nama = 'sad';
var peran = 'Tabib';
//input nama saja
if (nama!='') {
    //Ksartia
    if(nama !='' && peran =='Ksartia'){
    console.log("Selamat datang di Dunia Proxytia, "+nama)
    console.log("Halo "+peran+' '+ nama+", kamu dapat menyerang dengan senjatamu!")
    }//Tabib
    else if(nama !='' && peran =='Tabib'){
    console.log("Selamat datang di Dunia Proxytia, "+nama)
    console.log("Halo "+peran+' '+ nama+", kamu akan membantu temanmu yang terluka.")
    }//Penyihir
    else if(nama !='' && peran =='Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, "+nama)
    console.log("Halo "+peran+' '+ nama+", ciptakan keajaiban yang membantu kemenanganmu!")
    }else{
        console.log("Halo "+ nama +",Pilih peranmu untuk memulai game!")
    }
    //Nama Kosong
}else{
    console.log("Nama Harus diisi")
}
//-----------------------------------------------------------------
//----------------------------Versi Iseng -------------------------
//-----------------------Jika Perannya di random-------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------

/* 
var namaR = 'Chris';
var jumlahPeran=3;
var peranR = Math.floor(Math.random() *jumlahPeran);
console.log(peranR)
//-------------Random Menggunakan if------------
/* if(peranR==0){
    peranR='Ksartia'
}else if(peranR==1){
    peranR='Tabib'
}else if(peranR==2){
    peranR='Penyihir'
}else{
    console.log("Random Error")
} *//* 
//-------------Random Menggunakan Switch----------
switch(peranR){
    case 0:
        peranR='Ksartia'
        break
    case 1:
        peranR='Tabib'
        break
    case 2:
        peranR='Penyihir'
        break
} */
/* 
//input nama saja
if (namaR!='' && peranR=='') {
    console.log("Halo "+ namaR +",Pilih peranmu untuk memulai game!")
}//Ksartia
else if(namaR !='' && peranR =='Ksartia'){
    console.log("Selamat datang di Dunia Proxytia, "+namaR)
    console.log("Halo "+peranR+' '+ namaR+", kamu dapat menyerang dengan senjatamu!")
}//Tabib
else if(nama !='' && peranR =='Tabib'){
    console.log("Selamat datang di Dunia Proxytia, "+namaR)
    console.log("Halo "+peranR+' '+ namaR+", kamu akan membantu temanmu yang terluka.")
}//Penyihir
else if(namaR !='' && peranR =='Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, "+namaR)
    console.log("Halo "+peranR+' '+ namaR+", ciptakan keajaiban yang membantu kemenanganmu!")
}//Nama Kosong
else{
    console.log("Nama Harus diisi")
}  */