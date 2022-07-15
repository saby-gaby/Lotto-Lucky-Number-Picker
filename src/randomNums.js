const randomNums = () => {
  const nums = [];
  let num = Math.floor(Math.random() * 49 + 1);

  for (let i = 0; i < 6; i++) {
    if (!nums.includes(num)) {
      nums.push(num);
    } else {
      i--;
      num = Math.floor(Math.random() * 49 + 1);
    }
  }
  const arrOfNums = nums.sort((a, b) => a - b);
  arrOfNums.push(Math.floor(Math.random() * 10 + 1));
  return arrOfNums;
};

export default randomNums;
