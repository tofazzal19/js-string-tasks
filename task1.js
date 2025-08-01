let str = "Ariana Grande is amazing!";
let count =0;
str = str.toLowerCase();
 for(let i = 0; i<str.length; i++){
    if(str[i] === 'a'){
        count++;
       
  }
   
 }
 console.log(`the letter 'a' is ${count} times`);
 console.log(str.includes('a'))