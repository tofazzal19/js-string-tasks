let str = "hellow world, i am learning java sripts";
let words = str.split();

for(let i = 0; i< words.length; i++){
      let word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1);
}
let result = words.join(" ");
console.log(result)