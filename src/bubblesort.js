function Bubblesort(/* {[arrayEnt]} */) {
  let sortArray = [9, 3, 8, 4, 2];

  for (let i = 0; i < sortArray.length; i++) {
    console.log(i);
    for (let j = 0; j < sortArray.length - 1 - i; j++) {
      if (sortArray[j] > sortArray[j + 1]) {
        let temp = sortArray[j];
        sortArray[j] = sortArray[j + 1];
        sortArray[j + 1] = temp;
      }
    }
  }

  return sortArray;
}
export default Bubblesort;
