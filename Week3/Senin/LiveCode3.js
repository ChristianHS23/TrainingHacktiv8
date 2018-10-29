function generateMemberID(a1,a2,a3){
    var hasil=''
    if(a1!=''&&a2!=''&&a3!=''){
        tangLahir=a2.substring(0,2)
        bulanLahir=a2.substring(2,4)
        TahunLahir=a2.substring(6,9)
        hasil+=a1[0] +tangLahir+bulanLahir+TahunLahir+a3
    }else{
        hasil="Data harus diisi semua"
    }
    return hasil
}



var namaPelanggan='Christian'
var ttl='22121894'
var idmember='3'
console.log(generateMemberID(namaPelanggan,ttl,idmember))