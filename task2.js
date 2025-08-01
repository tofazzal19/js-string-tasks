let str = "Ariana Grande is amazing!";
let count_a =0;
let count_A =0;
 for(let i = 0; i<str.length; i++){
    if(str[i] === 'a' ){
        count_a++;
       
  }
    else if(str[i] === 'A' ){
        count_A++;
       
  }
 }
 console.log(`the letter 'a' ${count_a} times and  'A' is ${count_A} times`);