var StudentMorning=['Adi','Budi','Cici','Didi','Mahdi']
var StudentEvening=['Adi','Budi','Cici','Didi','Dimdi','Yaya']

var objStudents={}
/* for(var i=0;i<StudentMorning.length;i++){
    
       objStudents[StudentMorning[i]] =i
}
for(var j=0;j<StudentEvening.length;j++){
    objStudents[StudentEvening[j]]= j
    } */

/* 
var dataTerpanjang=0
    if(StudentEvening.length>StudentMorning.length)
        dataTerpanjang= StudentEvening.length
    else 
        dataTerpanjang=StudentMorning.length

    for(var i=0;i<dataTerpanjang;i++){
        if(StudentEvening[i] != undefined){
            objStudents[StudentEvening[i]] =2
        
        }
        if(StudentMorning[i]!=undefined){
            objStudents[StudentMorning[i]] =1
        }
    }
console.log(Object.keys(objStudents))
 */

var obj={
    nama:'Hacktiv8',
    fox:'Zen Fox',
    tahun:2018,
    batch:26,
    phase1:'26 November 2018'
}
for(var i =0 ; i< Object.getOwnPropertyNames(obj).length;i++){
    console.log(Object.getOwnPropertyNames(obj)[i])
}
console.log(Object.getOwnPropertyNames(obj))

var result=[]
var person= new Object
person.name ='Theresia'
person.age = 25
person.gender='female'
person.hobby=['belajar','baca','tidur']
result.push(person)

person= new Object
person.age=29
person.gender='male'
person.name='Maman'

result.push(person)
console.log(result)
for(var i=0;i<result.length;i++){
    console.log('Nama: '+ result[i].name)
    console.log('Umur: '+ result[i].age) 
    console.log('JK: '+ result[i].gender)
    if(result[i].hobby!= undefined){
        console.log('Hobby :')
        for(var j=0;j<result[i].hobby.length;j++){

        console.log('-' +result[i].hobby[j])
        }
    }else{
        result[i].hobby=['Main Dota']
        console.log('- ',result[i].hobby[0])
    }
}
/* 

var hasil=0

for(var i=0;i<result.length;i++){
    hasil+= result[i].age
}
console.log(hasil) */