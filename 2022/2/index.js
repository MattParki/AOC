import {getInput} from "../../utils/aoc.js"
import {EOL} from "os";

const rows = (await getInput()).split(EOL);

part1(rows);
part2(rows);

function part1(rows) {
    const resultMap = {
        'A': {
            'X': 'draw',
            'Y': 'win',
            'Z': 'lose'
        },
        'B': {
            'X': 'lose',
            'Y': 'draw',
            'Z': 'win'
        },
        'C': {
            'X': 'win',
            'Y': 'lose',
            'Z': 'draw'
        }
    }

    const resultPointMap = {
        'win': 6,
        'draw': 3,
        'lose': 0
    };

    const charCodeW = 'W'.codePointAt(0);
    let total = 0;

    rows.forEach(item => {
        const result = resultMap[item[0]][item[2]];
        const resultPoint = resultPointMap[result];
        const handPoint = item[2].codePointAt(0) - charCodeW;

        total += resultPoint + handPoint;
    });
    console.log(`Part 1: ${total}`)
}

function part2(rows) {

    const resultMap = {
        'A': {
            'X': 'draw',
            'Y': 'win',
            'Z': 'lose'
        },
        'B': {
            'X': 'lose',
            'Y': 'draw',
            'Z': 'win'
        },
        'C': {
            'X': 'win',
            'Y': 'lose',
            'Z': 'draw'
        }
    }

    const resultPointMap = {
        'win': 6,
        'draw': 3,
        'lose': 0
    };

    const charCodeW = 'W'.codePointAt(0);
    let total = 0;

    rows.forEach(item => {

        let remapped = '';

        if(item[0] === 'A') {
            remapped = 'Y'
        }
        if(item[0] === 'B') {
            remapped = 'X'
        }
        if(item[0] === 'C') {
            remapped = 'X'
        }


        const result = resultMap[item[0]][remapped];

        // console.log(result);
        const resultPoint = resultPointMap[result];
        // console.log(resultPoint);
        const handPoint = item[remapped].codePointAt(0) - charCodeW;

        console.log(handPoint)
        total += resultPoint + handPoint;
        // console.log(total);
    });
    console.log(`Part 2: ${total}`)

}