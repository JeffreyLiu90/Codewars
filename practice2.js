// const isTwin = (a,b) => {
//   let firstTwin = a.split("").sort()
// }

const customSort = (table, criteria) => {
  let arr = [];

  table.map(item => {
    if (Object.keys(item).includes(criteria)) {
      arr.push(item);
    }
  });

  // );
  return arr.sort((a, b) => b[criteria] - a[criteria]);
};

var a = [{ key: 9 }, { key: 3 }, { key: 5 }, { key: 2 }, { hello: 6 }];

console.log(customSort(a, "key"));
