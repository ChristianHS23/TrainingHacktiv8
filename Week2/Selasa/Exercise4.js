//-------------------------TUGAS------------------------------------------------------
var tanggal = 5; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2089; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var temmpError; // validasi error

//Cek Inputan Error atau tidak
if(tanggal<=0 || tanggal>31){
    temmpError=true;
    console.log("tanggal error=",temmpError)
}else if(bulan <= 0||bulan > 12 && temmpError!=false){
    temmpError=true;
    console.log("Bulan error=",temmpError)
}else if(tahun < 1900 || tahun > 2200 && temmpError!=false){
    temmpError=true;
    console.log("Tahun Error=",temmpError)
}
else{
    temmpError=false;
}


//setting bulan dari number ke string
switch(bulan){
    case 1:
        bulan="Januari"
        break
    case 2:
        bulan="Februari"
        break
    case 3:
        bulan="Maret"
        break
    case 4:
        bulan="April"
        break
    case 5:
        bulan="Mei"
        break
    case 6:
        bulan="Juni"
        break
    case 7:
        bulan="Juli"
        break
    case 8:
        bulan="Agustus"
        break
    case 9:
        bulan="September"
        break
    case 10:
        bulan="Oktober"
        break
    case 11:
        bulan="November"
        break
    case 12:
        bulan="December"
        break
}
if(temmpError==false){
console.log(tanggal+' ',bulan+' ',tahun)
}else{
    console.log("Masukkan data yang benar")
}
