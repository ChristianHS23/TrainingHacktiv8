function dataHandling2(data){
    var bulanAlfa=''
    data.splice(1,1,"Roman Alamsyah Elsharawy")
    data.splice(2,1,"Provinsi Bandar Lampung")
    data.splice(4,1,"SMA Internasional Metro","Pria")
    console.log(data)
    var tanggal=data[3].split("/")
    switch(tanggal[1]){
        case '01':
            bulanAlfa='Januari'
            break
        case '02':
            bulanAlfa='Februari'
            break
        case '03':
            bulanAlfa='Maret'
            break
        case '04':
            bulanAlfa='April'
            break
        case '05':
            bulanAlfa='Mei'
            break
        case '06':
            bulanAlfa='Juni'
            break
        case '07':
            bulanAlfa='Juli'
            break
        case '08':
            bulanAlfa='Agustus'
            break
        case '09':
            bulanAlfa='September'
            break
        case '10':
            bulanAlfa='Oktober'
            break
        case '11':
            bulanAlfa='November'
            break
        case '12':
            bulanAlfa='Desember'
            break
    }
    var sortedDate=tanggal
    console.log(bulanAlfa)
    var tanggal2=tanggal.join('-')
    sortedDate.sort(function(a,b){return b-a})
    console.log(sortedDate)

    console.log(tanggal2)
    var Nama=data[1].slice(0,15)
    console.log(Nama)
}



var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
