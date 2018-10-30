function dataHandling2(data){
    data.splice(1,1,"Roman Alamsyah Elsharawy")
    data.splice(2,1,"Provinsi Bandar Lampung")
    data.splice(4,1,"SMA Internasional Metro")
    data.splice(4,0,"Pria")
    console.log(data)
    tanggal=data[3].split("/")
    console.log(tanggal)
    hari=tanggal[0]
    bulan=tanggal[1]
    tahun=tanggal[2]
    switch(bulan){
        case 1:'Januari'
        break
        case 2:'Februari'
        break
        case 3:'Maret'
        break
        case 4:'April'
        break
        case 5:'Mei'
        break
        case 6:'Juni'
        break
        case 7:'Juli'
        break
        case 08:'Agustus'
        break
        case 09:'September'
        break
        case 10:'Oktober'
        break
        case 11:'November'
        break
        case 12:'Desember'
        break
    }
    console.log(bulan)

}



var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
