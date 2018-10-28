function balikKata(input){
    var kata=''
    for(i=input.length-1;i>=0;i--){
        kata+=input[i]
    }
    return kata

}

console.log(balikKata("hello world!"))
//input "hello world!"
//output
//"!dlrow olleh"