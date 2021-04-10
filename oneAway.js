// given two strings, a & b
// check if they are only one EDIT away
// EDIT -> insert a character, remove a character, change a character

function oneAway(a, b) {
  if (a.length === b.length) {
    // check if it's one edit away
    return oneEditAway(a, b);
  } else if (Math.abs(a.length - b.length) === 1) {
    // one insert or remove away
    return oneInsertOrRemoveAway(a, b);
  }

  // not possible!
  return false;
}

// only 1 character is different
function oneEditAway(a, b) {
  let found = false;
  let i = 0;
  let j = 0;
  const [long, short] = a.length > b.length ? [a, b] : [b, a];
  while (i < long.length && j < short.length) {
    const ci = long[i];
    const cj = short[j];
    if (ci !== cj) {
      if (found === true) return false;
      found = true;
    }

    i++;
    j++;
  }

  return true;
}

function oneInsertOrRemoveAway(a, b) {
  let i = 0;
  let j = 0;
  const [long, short] = a.length > b.length ? [a, b] : [b, a];
  while (i < long.length && j < short.length) {
    const ci = long[i];
    const cj = short[j];
    if (ci !== cj) {
      if (i !== j) return false;
      i++;
    } else {
      i++;
      j++;
    }
  }

  return true;
}

// refactored Version - combined the conditions
function oneAwayCombined(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;

  let found = false;
  let i = 0;
  let j = 0;
  const [long, short] = a.length > b.length ? [a, b] : [b, a];
  while (i < long.length && j < short.length) {
    const ci = long[i];
    const cj = short[j];

    if (a.length === b.length) {
      if (ci !== cj) {
        if (found === true) return false;
        found = true;
      }
    } else {
      if (ci !== cj) {
        if (i !== j) return false;
        i++;
        continue;
      }
    }

    i++;
    j++;
  }

  return true;
}

// tests
console.log(oneAway("pale", "ple") === true);
console.log(oneAway("pales", "pale") === true);
console.log(oneAway("pale", "bale") === true);
console.log(oneAway("pale", "bake") === false);

// test refactored version
console.log(oneAwayCombined("pale", "ple") === true);
console.log(oneAwayCombined("pales", "pale") === true);
console.log(oneAwayCombined("pale", "bale") === true);
console.log(oneAwayCombined("pale", "bake") === false);
