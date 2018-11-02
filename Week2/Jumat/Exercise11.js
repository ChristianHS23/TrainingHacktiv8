/* function balikKata(kata) {
    var input =''
   for(var i=kata.length-1;i>=0;i--){
      input+= kata[i]
   }
   return input
    // you can only write your code here!
  } */
  function genapKata(kata){
    var input=''
    for(var i=0;i<kata.length;i++){
      if(i%2==0){
      input+=kata[i]
      }
    }
    return input
  }
console.log(genapKata("Hello Abhe"))//HloAhe
console.log(genapKata("I love javascript"));//Ilv aacit

/* 
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS */