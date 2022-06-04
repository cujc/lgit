//learn from 30seonces of c
//https://www.30secondsofcode.org/js/p/1

//For Loops

const files = [ 'foo.txt', '.bar', ' ', 'baz.foo'];
let filePaths = [];

for (let file of files) {
    const fileName = file.trim();
    if(fileName) {
        const filePath = `~/code/${fileName}`;
        filePaths.push(filePath);
    }
}
console.log(filePaths);

//application case

const shopitems = [
    'milk', 'egg', 'cheeze'
]

let shoplists = shopitems.reduce((acc, item) => {
    acc.push(item);
  return acc;
},[]);

console.log(shoplists);

//arrow function of basic calculation

const add = (a,b)=>(a+b);
const div= (a,b)=>(a/b);
const multi = (a,b)=>(a*b);


console.log(add(2,3),div(2,3),multi(2,3));


