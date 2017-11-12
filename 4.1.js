// @flow

// Before
function getSixItems() {
  let arr: Array<number> = [];

  for (let i = 0; i < 6; i += 1) {
    arr.push(i);
  }

  return arr;
}

getSixItems();

// After
function getItems(n: number) {
  let arr: Array<number> = [];

  for (let i = 0; i < n; i += 1) {
    arr.push(i);
  }

  return arr;
}

getItems(6);
