//----------------------Soal 1----------------------------------------------------------
function shoutOut(){
    console.log("Halo Function")
    return '';
}
console.log(shoutOut()) // Menampilkan "Halo Function!" di console
//-------------------Soal 2------------------------------------------------------------
function calculateMultiply(n1,n2){
    return n1*n2;
}


var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//--------------------Soal 3-----------------------------------------------------------

function processSentence(info1,info2,info3,info4){
    return "Nama saya " + info1+", umur saya "+info2 + " tahun, alamat saya di "+info3+" , dan saya punya hobby yaitu "+info4+'!'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"