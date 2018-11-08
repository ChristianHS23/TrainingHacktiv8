function changeVocals (str) {
    //code di sini
    var kamus='aiueoAIUEO'
    var nextKamus='bjvfpBJVFP'
    var strcode=''
    var check=false
    for(var i=0;i<str.length;i++){  
        for(var j=0;j<kamus.length;j++){
            if(str[i]===kamus[j]){
                strcode+=nextKamus[j]
                check=false
                break
            }else{
                check=true
            }
        }
        if(check)
        strcode+=str[i]
    }
    return strcode
  }
  
  function reverseWord (str) {
    //code di sini
    var strtemp=''
    for(var i=str.length-1;i>=0;i--){
        strtemp+=str[i]
    }
    return strtemp
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var strtemp=''
    for(var i=0;i<str.length;i++){
        if(str[i]==str[i].toUpperCase())
            strtemp+=str[i].toLowerCase()
        else
            strtemp+=str[i].toUpperCase()
    }
    return strtemp
    
  }
  
  function removeSpaces (str) {
    //code di sini
   
    var strtemp=''
    for(var i=0;i<str.length;i++){
        if(str[i]!==' ')
        strtemp+=str[i]
    }
    return strtemp
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5)
        return 'Minimal karakter yang diinputkan adalah 5 karakter'

    var changeKata= changeVocals(name)
    var reverseKata= reverseWord(changeKata)
    var setLowerUpperKata= setLowerUpperCase(reverseKata)
    var getPassword= removeSpaces(setLowerUpperKata)
    return getPassword
    
    
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'r(var i=0;i<str.length;i++){

