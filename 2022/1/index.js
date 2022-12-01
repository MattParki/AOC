import { getInput } from "../../utils/aoc.js";
import { EOL } from "os";

const items = (await getInput()).split(EOL);

const totalCaloriesPerElf = [];
let index = 0;

items.forEach((item) => {
  if (item === "") {
    index++;
    totalCaloriesPerElf[index] = 0;
  } else {
    totalCaloriesPerElf[index] += ~~item;
  }
});

totalCaloriesPerElf.sort((a, b) => a - b);

part1(totalCaloriesPerElf);
part2(totalCaloriesPerElf);

function part1(totalCaloriesPerElf) {
  const max = totalCaloriesPerElf[totalCaloriesPerElf.length - 1];

  console.log(`Part 1: ${max}`);
}

function part2(totalCaloriesPerElf) {
  const total = totalCaloriesPerElf.slice(-3).reduce((acc, cur) => acc + cur);

  console.log(`Part 2: ${total}`);
}
