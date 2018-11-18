function hitungHurufRec(string,cari){
    if(!string){
        return 0
    }else{
        if(string[0]==cari){
            return 1 + hitungHurufRec(string.slice(1),cari)
        }else{
            return hitungHurufRec(string.slice(1),cari)
        }
    }
}

console.log(hitungHurufRec('hacktiva','a'))//2




