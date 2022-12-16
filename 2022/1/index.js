import { getInput } from "../../utils/aoc.js"
import {EOL} from "os";
const rows = (await getInput()).split(EOL);

part1(rows);
part2(rows);



function part1(rows) {

    let i = 0
    const totals = [0];
    rows.forEach(item => {
        if(item !== '') {
            totals[i] += ~~item
        } else {
            i++
            totals[i] = 0;
        }
    })
    const ans = totals.sort((a,b) => a-b).pop();
    console.log(`part 1: ${ans}`);
    // console.log(totals.sort((a,b) => a-b).pop());
}

function part2(rows) {
    let i = 0
    const totals = [0];
    rows.forEach(item => {
        if(item !== '') {
            totals[i] += ~~item
        } else {
            i++
            totals[i] = 0;
        }
    })
    const ans = totals.sort((a,b) => a-b).slice(-3).reduce((acc, cur) => acc += cur, 0);
    console.log(`part 2: ${ans}`);
}