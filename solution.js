//1.double values
console.log("------------1-----------");
function doubleValues(array) {
  return array.map((item) => item * 2);
}

console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));

//2. even values
console.log("------------2-----------");
const sampleArray = [1, 2, 3, 8, 7];

function onlyEvenValues(arr) {
  const newarray = [];
  arr.forEach((item) => {
    if (item % 2 === 0) {
      newarray.push(item);
    }
  });
  return newarray;
}

console.log(onlyEvenValues([1, 2, 3]));
console.log(onlyEvenValues([5, 1, 2, 3, 10]));
/*
console.log(onlyEvenValues(sampleArray));
console.log(
  sampleArray.map((item) => {
    if (item % 2 === 0) return item;
  })
);
*/
//3. last and first letter of string
console.log("------------3-----------");
function showFirstAndLast(arr) {
  return console.log(arr.map((item, idx) => item[0] + item[item.length - 1]));
}

showFirstAndLast(["colt", "matt", "tim", "udemy"]);
showFirstAndLast(["hi", "goodbye", "smile"]);

//4. AddkeyandValue
console.log("------------4-----------");
function addKeyAndValue(array, key, value) {
  return array.map((element) => {
    console.log(element);
    element[key] = value;
    return element;
  });
}

console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);
console.log("------------5-----------");
//5. vowelCount

function vowelCount(str) {
  let lowerStr = [...str.toLowerCase()];
  const vowelStr = ["a", "e", "i", "o", "u"];
  let count = {};
  lowerStr.forEach((letter) => {
    if (vowelStr.includes(letter)) {
      count[letter] = (count[letter] || 0) + 1;
    }
  });
  return count;
}

console.log(vowelCount("Elie")); // {e:2,i:1};
console.log(vowelCount("Tim")); // {i:1};
console.log(vowelCount("Matt")); // {a:1})
console.log(vowelCount("hmmm")); // {};
console.log(vowelCount("I Am awesome and so are you")); // {i: 1, a: 4, e: 3, o: 3, u: 1};
