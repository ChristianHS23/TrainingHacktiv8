function groupAnimals(animals) {
  // you can only write your code here!
  var hasil = []
  animals.sort()
  for (var i = 0; i < animals.length; i++) {
      var animalArr = []
      var temp = animals[i]
      var hurufDepan = animals[i][0]
      for (var j = animals.length - 1; j > i; j--) {
          if (hurufDepan === animals[j][0]) {
              temp += ', ' + animals[j]
              animals.splice(j, 1)
          }
      }
      animalArr.push(temp)
      hasil.push(animalArr)
  }
  return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta']]
