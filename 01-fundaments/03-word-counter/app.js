const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const words = data.split(" ")
const wordCount = words.length
const reactWordCount = words.find(word => word.match(/react/ig)).length

let count = 0
let searcher = ""
for(char of data) {
    if(searcher.toLowerCase().includes('react')) {
        count++
        searcher = ""
    }
    searcher += char
}

const countReactWords = data.match(/react/gi).length
// console.log({'Palabras:': wordCount})
console.log({'React Palabras:': count})
console.log({'React Palabras:': countReactWords})