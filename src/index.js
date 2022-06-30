module.exports = function toReadable (number) {
    let result = '';
    let numberS = String(number);
    if (numberS.length === 1) {
        result = units(number);
    } else if (numberS.length === 2) {
        result = dozens(Number(numberS[0])) + ' ' + units(Number(numberS[1]));
    } else  if (numberS.length === 3) {
        result = units(Number(numberS[0])) + ' ' + 'hundred' + ' ' + dozens(Number(numberS[1])) + ' ' + units(Number(numberS[2]));
    } else result = zero;
    return result;
}
function units(params) {
    switch (params) {
        case 1:params = 'one';break;
        case 2:params = 'two';break;
        case 3:params = 'three';break;
        case 4:params = 'four';break;
        case 5:params = 'five';break;
        case 6:params = 'six';break;
        case 7:params = 'seven';break;
        case 8:params = 'eight';break;
        case 9:params = 'nine';break;
      }
    return params;  
}
function dozens(params) {
    switch (params) {
        case 2:params = 'twenty';break;
        case 3:params = 'thirty';break;
        case 4:params = 'forty';break;
        case 5:params = 'fifty';break;
        case 6:params = 'sixty';break;
        case 7:params = 'seventy';break;
        case 8:params = 'eighty';break;
        case 9:params = 'ninety';break;
      }
    return params;  
}
