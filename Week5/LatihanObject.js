 function graduates(string){
    var output=new Object
    var countLulus=0  
    var rataKelass=0
    var countSiswa=0
    for(var i=0;i<string.length;i++){
        if(string[i].score>0){
            rataKelass+=string[i].score
            countSiswa++
        }
        if(string[i].score>75)
            countLulus++

     
        rataKelass/=countSiswa
        if(!output[string[i].class]){
            output[string[i].class]={
                jmlLulus:countLulus,
                lulus:[],
                rataKelas:rataKelass
            }
        }   
        if(string[i].score>75){
            var output2={
                name:string[i].name,
                score:string[i].score
            }
            output[string[i].class].lulus.push(output2)
        }
    }
    return output
 }

  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));

// {
//   foxes: {
//     jmlLulus: 1,
//     lulus: [{ name: 'Dimitri', score: 90 }],
//     rataKelas: 70
//   },
//   wolves: {
//     jmlLulus: 2,
//     lulus: [{ name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//     ],
//     rataKelas: 74
//   }
// }