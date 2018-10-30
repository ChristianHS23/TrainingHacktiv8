function generateMemberID(a1,a2,a3){
    var hasil=''
    if(a1!=''&&a2!=''&&a3!=''){
        tangLahir=a2.substring(0,2)
        bulanLahir=a2.substring(2,4)
        TahunLahir=a2.substring(6,9)
        if(a3.length==1){
        hasil+=a1[0].toLowerCase() +tangLahir+bulanLahir+TahunLahir+'00'+a3
        }else if(a3.length==2){
            hasil+=a1[0].toLowerCase() +tangLahir+bulanLahir+TahunLahir+'0'+a3
        }else{
            hasil+=a1[0].toLowerCase() +tangLahir+bulanLahir+TahunLahir+a3
        }
    }else{
        hasil="Data harus diisi semua"
    }
    return hasil
}



var namaPelanggan='Christian'
var ttl='22121894'
var idmember='32'
console.log(generateMemberID(namaPelanggan,ttl,idmember))