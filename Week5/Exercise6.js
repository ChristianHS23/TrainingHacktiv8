function meleeRangedGrouping (str) {
    //your code here
    if(!str.length){
        return []
    }
    var objGrouping= new Object
    var newArr=str.split(',')
    for(var i=0;i<newArr.length;i++){
        var newArrSplit=newArr[i].split('-')
        if(!objGrouping[newArrSplit[1]]){
            objGrouping[newArrSplit[1]]=[]
        }
        objGrouping[newArrSplit[1]].push(newArrSplit[0])
    }
    return Object.values(objGrouping)
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []