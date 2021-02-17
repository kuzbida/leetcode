// #1
// Merge to array and filter only admins
const arr1 = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];
const arr2 = [{id: 2, isAdmin: true}, {id: 1, isAdmin: false}];

// #2
// When setTimeout will be executed? ()
console.log("start");
const start = Date.now();
setTimeout(() => console.log(`${Date.now() - start}ms passed (500)`), 500);

while (true) {
  if (Date.now() - start > 2000) break;
}

console.log(`${Date.now() - start}ms passed (2000)`);

/*
start
2001ms passed (2000)
2002ms passed (500)
*/


// #3
setTimeout(() => console.log(1), 0);
console.log(2);
Promise.resolve(console.log(3));
Promise.resolve(() => console.log(4));
setImmediate(()=> console.log(5));