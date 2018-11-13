function groupAnimals(animals) {
  // you can only write your code here!
  var hasil = []
  animals.sort()
  var temp=[]
  var hurufDepan = animals[0][0]
  
  for (var i = 0; i < animals.length; i++) {
     if(hurufDepan==animals[i][0]){
         temp.push(animals[i])
     }else if(hurufDepan!=animals[i][0]){
        hurufDepan=animals[i][0]
        hasil.push(temp)
        temp=[animals[i]]
        //temp.push(animals[i])
     }
     
  }
  if(temp.length){
      hasil.push(temp)
  }
  
  return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta']]
