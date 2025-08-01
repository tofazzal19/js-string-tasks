let str = 'A quick Brown fox jumps over the lazy  dog.'
 str = str.toLowerCase();

 let hasA = str.includes('a')
 let hasE = str.includes('e')
 let hasI = str.includes('i')
 let hasO = str.includes('o')
 let hasU = str.includes('u')

 if(hasA && hasE &&  hasI && hasO && hasU){

    console.log(" The string contains all the vowels.");
} 
else {
    console.log(" The string does NOT contain all the vowels.");
 }




    














