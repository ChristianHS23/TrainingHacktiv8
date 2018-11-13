function changeMe(arr) {
    // you can only write your code here!
    var tahun=2018
    for(var i=0;i<arr.length;i++){
        if(arr[i][3]!= undefined && arr[i][3]<=2018)
            age=tahun-arr[i][3]
        else
            age= 'Invalid birth year!'
    
    var person= new Object()
        person.firstName=arr[i][0]
        person.lastName=arr[i][1]
        person.gender=arr[i][2]
        person.age= age
    console.log(i+1+'. '+person.firstName+' '+person.lastName)
    console.log(person)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""