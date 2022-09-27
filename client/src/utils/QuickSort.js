export const quickSort = (list) => {
    if (list.length < 2) return list;
    let pivot = list[0];
    let left = [];
    let right = [];
    for (let i = 1, total = list.length; i < total; i++) {
      if (list[i].price < pivot.price) left.push(list[i]);
      else right.push(list[i]);
    }
    return [...quickSort(right), pivot, ...quickSort(left)];
  };
  
  const utils = {
      quickSort
  }
  
  export default utils;
  