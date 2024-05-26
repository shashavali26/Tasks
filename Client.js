var a = document.getElementById("para");
async function ab(){
const response = await fetch("http://localhost:3000/big.txt");
const text = await response.text();
const words = text.toLowerCase()  
                       .replace(/[^a-zA-Z ]/g, '')
                       .split(/\s+/);  
      const wordC = {};
      for (const word of words) {
        if (wordC[word]) {
          wordC[word]++;
        } else {
          wordC[word] = 1;
        }
      }
  
      const sortedW = Object.entries(wordC)
        .sort((a, b) => b[1] - a[1]); 
  
      const top10Words = sortedW.slice(0, 10).reduce((accumulator, [word, count]) => {
        accumulator[word] = count;
        return accumulator;
      }, {});
  

      const jsonFormat = JSON.stringify(top10Words, null, 2); 
  
      console.log("Result of top 10 words and their counts in json Format:");
      console.log(jsonFormat);
      a.innerHTML = jsonFormat;
    } 
