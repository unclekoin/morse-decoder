const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }
    arr2 = [];
    let code = '';
    for (let j of arr) {
        for (let k = 0; k < j.length; k += 2) {

            if (j.slice(k, k + 2) === '00') {
                continue;
            }
            switch (j.slice(k, k + 2)) {
                case '10':
                    code += '.';
                    break;
                case '11':
                    code += '-';
                    break;
                default:
                    code += ' '
            }
        }
        arr2.push(code);
        code = '';
    }

    let text = '';

    for (let n of arr2) {
        if (MORSE_TABLE[n] !== undefined) {
            text += MORSE_TABLE[n];
        } else {
            text += ' ';
        }

    }

    return text;
}

module.exports = {
    decode
}