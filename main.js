/******************
 * YOUR CODE HERE *
 ******************/

function onlyOdds(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      result.push(nums[i]);
    }
  }
  
  return result;

}

function onlyEvens(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
}

function shortNamesOnly(names) {
  const result = [];
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    console.log(name.length);
    if (names[i].length < 7) {
      result.push(names[i]);
    }
  }
  return result;
}
// names[i] is a string that can be compared to a number
// its a name[i] is a string

function sNames(names) {
  const newNames = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'S') {
      newNames.push(names[i]);
    }
  }

  return newNames;
}

// names[i][0] starts at index 0
// if (name.startsWith('S'))












/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
}
