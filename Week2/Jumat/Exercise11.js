var input =''
var kata=input
function balikKata(kata) {
   var jumlahKata= kata.length-1
   for(var i=jumlahKata;i>=0;i--){
       input+=kata.charAt(i)
   }
   return input
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS