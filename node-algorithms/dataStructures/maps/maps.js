// function countWordEficenty(text) {
//     let normalizeTex = text.toLowerCase().replace(/[^\w\s]/g, "");
//     console.log(normalizeTex);
//     let words = normalizeTex.split(/\s+/);
//     console.log(words);
//     let frequencyMap    = new Map()
//     for (let word of words) {
//         let count = frequencyMap.get(word) || 0;
//         frequencyMap.set(word, count + 1);
//     }

//     return frequencyMap;
// }

/**
 * Alright, Stellar Navigator, let's shoot for the stars with this vibrant task. 
 * Imagine you're receiving cosmic signals, but the alien words are separated by a comma, not the usual spaces we're accustomed to. 
 * They've sent you a string and your objective is to jot down how many times each word appears in the message. 
 * Let's say it's something like "hello,stellar,navigator,stellar,stellar". The outcome? A count showing "hello: 1, stellar: 3, navigator: 1". 
 * Get your code rocket ready to decipher these galactic words! Let's see what you've got.
 */

// Example usage:
// let text = "Hello world! Hello everyone. Welcome to the world of JavaScript.";
// let wordCount = countWordEficenty(text);
// console.log(wordCount);

const text = "Cosmo,is,an,incredible,technical,companion,with,very,strong,skills,in,Algorithms,and,Data,Structures,and,a,great,teacher,for,technical,interviews.";
const wordCount = new Map();
const words = text.split(",");

let count = 0

// TODO: iterate through words and count frequencies;

for (let word of words) {

   let count = wordCount.get(word) || 0
   wordCount.set(word, count += 1)

}

// console.log(wordCount);

/**
 * Two Sum — O(n) tiempo, O(n) espacio
 * Patrón: Hash Map / complemento
 */
function twoSum(nums, target) {
   const seen = new Map(); // valor → índice

   for (let i = 0; i < nums.length; i++) {
      const complemento = target - nums[i];

      if (seen.has(complemento)) {
         return [seen.get(complemento), i]; // ¡encontrado!
      }

      seen.set(nums[i], i); // guardar este número
   }
   return []; // sin solución
}

// ── Pruebas ──────────────────────────────────
// console.log(twoSum([2,7,11,15], 9));  // → [0, 1]
// console.log(twoSum([3,2,4], 6));       // → [1, 2]
// console.log(twoSum([3,3], 6));    


const frequencies = (arr) => {

   const freqs = new Map()

   for (let item of arr) {

      if (freqs.has(item)) {

         freqs.set(item, freqs.get(item) + 1)

      } else {

         freqs.set(item, 1)

      }

   }

   return Object.fromEntries(freqs)

}

// let info = frequencies([2, 7, 15, 2, 7, 11, 15]);
// let mxFreq = Math.max(...Object.values(info))
// console.log(mxFreq);


const validAnagram = (wordA, wordB) => {

   let map = new Map()

   for (const item of wordA) {
      if (map.has(item)) {
         map.set(item, map.get(item) + 1)
      } else {
         map.set(item, 1)
      }
   }

   for (const item of wordB) {
      if (!map.has(item)) {
         return false
      }
      map.set(item, map.get(item) - 1)
   }

   for (let item of map.values()) {
      if (item !== 0) return false
   }

   return true

}

// console.log(
//    validAnagram('ana', 'ana')
// );

const nonRepeatedCharacter = (word) => {

   let map = new Map()

   for (let item of word) {

      if (!map.has(item)) {
         map.set(item, 1)

      } else {

         map.set(item, map.get(item) + 1)

      }
   }

   for (let i = 0; i < word.length; i++) {
      if (map.get(word[i]) === 1) {
         return i
      }

   }

   return -1
}

// console.log(
//    nonRepeatedCharacter("assee")
// );


const remanToInt = (s) => {

   const map = new Map();
   map.set('I', 1);
   map.set('V', 5);
   map.set('X', 10);
   map.set('L', 50);
   map.set('C', 100);
   map.set('D', 500);
   map.set('M', 1000);

   let total = 0

   for (let i = 0; i < s.length; i++) {

      let current = map.get(s[i])
      let next = map.get(s[i + 1])

      if (current < next) {
         total -= current
      } else {
         total += current
      }

   }

   return total

}

// console.log(
//    remanToInt('MCMXCIV')
// );


function majorityElement(nums) {

   const count = new Map();
   const threshold = Math.floor(nums.length / 2);

   for (const num of nums) {

      count.set(num, (count.get(num) || 0) + 1)
   }

   for (const [num, freq] of count) {

      if (freq > threshold) {
         return num
      }
   }

   return null;

}

// console.log(majorityElement([3, 2, 3]));        // 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
// console.log(majorityElement([1, 2, 3]));        // null

const ransomNote = (word1, word2) => {

   const mapper = new Map()

   for (const word of word1) {

      if (mapper.has(word)) {
         mapper.set(word, (mapper.get(word) || 0) + 1)
      } else {
         mapper.set(word, 1);   // ← esto faltaba
      }
   }

   for (const word of word2) {
      if (mapper.has(word)) {
         mapper.set(word, mapper.get(word) - 1);
      }
   }

   for (const word of mapper.values()) {
      if (word > 0) return false
   }

   return true

}



// console.log(ransomNote('felos', 'solef'));
